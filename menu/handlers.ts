import { MenuItem, BrowserWindow, webContents, dialog } from 'electron';

export class FileHandlers {
    open(menuItem: Electron.MenuItem, browserWindow: Electron.BrowserWindow, event: Electron.Event) {
        dialog.showOpenDialog(browserWindow, {
            title: 'Select Directory',
            properties: ['openDirectory']
        }, fileNames => {
            console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIIIIIIII', fileNames);
            webContents.getFocusedWebContents().send("menu-open", fileNames);
        });
    }
}

export class MenuHandlers {
    static file: FileHandlers = new FileHandlers();
}