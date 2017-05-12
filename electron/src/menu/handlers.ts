import { MenuItem, BrowserWindow, webContents, dialog } from 'electron';

import { FileService } from '../services/fileService';

import * as log from 'electron-log';

export class FileHandlers {
  open(menuItem: Electron.MenuItem, browserWindow: Electron.BrowserWindow, event: Electron.Event) {
    dialog.showOpenDialog(browserWindow, {
      title: 'Select Directory',
      properties: ['openDirectory']
    }, fileNames => {
      log.debug('Open Folder has been selected.', fileNames);

      FileService.updateSelectedFolder(fileNames[0]);
    });
  }
}

export class MenuHandlers {
  static file: FileHandlers = new FileHandlers();
}
