import path = require('path');
import url = require('url');

import { app, BrowserWindow, Menu } from 'electron';

import { buildMenu } from './menu/builder';
import { registererService } from './services/ipcRegistererService';

import * as log from 'electron-log';

export default class Main {
  static mainWindow: Electron.BrowserWindow;
  static application: Electron.App;
  static BrowserWindow;

  private static onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      Main.application.quit();
    }
  }

  private static onClose() {
    Main.mainWindow = null;
  }

  private static onReady() {
    log.debug('onReady');

    let pathname = 'ng/index.html'

    log.debug('Looking for start page:', path.resolve('./app/ng/index.html'));

    Main.mainWindow = new Main.BrowserWindow({ width: 800, height: 600 });
    let pageUrl = url.format({
      pathname: path.resolve('./app/ng/index.html'),
      protocol: 'file:',
      slashes: true
    });

    Main.mainWindow.loadURL(pageUrl);

    buildMenu();

    registererService.invokeRegister();

    Main.mainWindow.on('closed', Main.onClose);
  }

  static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
    // we pass the Electron.App object and the
    // Electron.BrowserWindow into this function
    // so this class1 has no dependencies.  This
    // makes the code easier to write tests for

    Main.BrowserWindow = browserWindow;
    Main.application = app;
    Main.application.on('window-all-closed', Main.onWindowAllClosed);
    Main.application.on('ready', Main.onReady);
  }
}
