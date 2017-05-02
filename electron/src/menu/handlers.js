"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
class FileHandlers {
    open(menuItem, browserWindow, event) {
        electron_1.dialog.showOpenDialog(browserWindow, {
            title: 'Select Directory',
            properties: ['openDirectory']
        }, fileNames => {
            console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIIIIIIII', fileNames);
            electron_1.webContents.getFocusedWebContents().send("menu-open", fileNames);
        });
    }
}
exports.FileHandlers = FileHandlers;
class MenuHandlers {
}
MenuHandlers.file = new FileHandlers();
exports.MenuHandlers = MenuHandlers;
//# sourceMappingURL=handlers.js.map