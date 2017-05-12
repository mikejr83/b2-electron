import { webContents } from 'electron';

import { Files, TreeView } from '../../../shared/files';

import * as fs from 'fs';
import * as path from 'path';

export namespace FileService {
  let selectedFolder: string;

  export function updateSelectedFolder(folderName: string) {
    selectedFolder = folderName;

    var fsContents = mapTree(selectedFolder);
    fsContents.isExpanded = true;

    console.log('Folder:', fsContents);

    webContents.getFocusedWebContents().send("menu-open", fsContents);
  }

  function mapTree(itemPath): TreeView.Node {
    let stats = fs.lstatSync(itemPath);

    let item = new TreeView.Node(itemPath, path.basename(itemPath));

    if (stats.isDirectory()) {
      var children = fs.readdirSync(itemPath).map((child) => {
        return mapTree(path.join(itemPath, child));
      });

      for (let child of children) {
        item.children.push(child);
      }
    }

    return item;
  }
}
