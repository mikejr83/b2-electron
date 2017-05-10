import { webContents } from 'electron';

import { Files } from '../../../shared/files';

import * as fs from 'fs';
import * as path from 'path';

export namespace FileService {
  let selectedFolder: string;

  export function updateSelectedFolder(folderName: string) {
    selectedFolder = folderName;

    var fsContents = directoryTree(selectedFolder);

    webContents.getFocusedWebContents().send("menu-open", fsContents);
  }

  function directoryTree(filename): Files.FileSystemObject {
    let stats = fs.lstatSync(filename);
    let fsObj = new Files.FileSystemObject(filename, path.basename(filename));

    if(stats.isDirectory()) {
      fsObj.type = 'folder';
      fsObj.children = fs.readdirSync(filename).map((child) => {
        return directoryTree(path.join(filename, child));
      });
    } else {
      fsObj.type = 'file';
    }

    return fsObj;
  }
}
