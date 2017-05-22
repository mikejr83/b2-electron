import { webContents } from 'electron';

import { debug } from 'electron-log';

import { registererService } from './ipcRegistererService';
import { IPCListner } from './ipcListener'

import { B2Shared } from '../../../shared/files';

import * as fs from 'fs';
import * as path from 'path';

export namespace FileService {
  let selectedFolder: string;

  export function updateSelectedFolder(folderName: string) {
    selectedFolder = folderName;

    var fsContents = mapTree(selectedFolder);
    fsContents.isExpanded = true;

    debug('Updating selected folder:', folderName);

    webContents.getFocusedWebContents().send("menu-open", fsContents);
  }

  function mapTree(itemPath: string, currentDepth?: number): B2Shared.TreeView.Node {
    if (!currentDepth) currentDepth = 0;

    let stats = fs.lstatSync(itemPath);

    let item = new B2Shared.TreeView.Node(itemPath, path.basename(itemPath));

    if (stats.isDirectory() && currentDepth < 3) {
      var children = fs.readdirSync(itemPath).map((child) => {
        return mapTree(path.join(itemPath, child), currentDepth++);
      });

      for (let child of children) {
        item.children.push(child);
      }
    } else if (stats.isDirectory() && currentDepth >= 3) {
      item.hasChildren = true;
      item.children = null;
    }

    return item;
  }

  registererService.registerRegistrationEvent((service) => {
    debug('Registering the get childrent handle.');

    let handleGetFolderChildren = new IPCListner();
    handleGetFolderChildren.channel = 'treeview-getfolderchildren';
    handleGetFolderChildren.handler = (event, args) => {
      let node = args as B2Shared.TreeView.Node;

      let child = mapTree(node.id);

      webContents.getFocusedWebContents().send('treeview-getfolderchildren' + node.id, child);
    };

    service.registerNewListner(handleGetFolderChildren);
  });;
}
