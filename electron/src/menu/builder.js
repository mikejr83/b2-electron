"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const handlers_1 = require("./handlers");
function createSeparater() {
    return new electron_1.MenuItem({
        type: 'separator'
    });
}
function buildFileMenu(applicationMenu) {
    let openFolder = new electron_1.MenuItem({
        click: handlers_1.MenuHandlers.file.open,
        label: 'Open Folder'
    });
    applicationMenu.items[0].submenu.insert(0, openFolder);
    applicationMenu.items[0].submenu.insert(1, createSeparater());
}
function buildMenu() {
    let applicationMenu = electron_1.Menu.getApplicationMenu();
    buildFileMenu(applicationMenu);
    electron_1.Menu.setApplicationMenu(applicationMenu);
}
exports.buildMenu = buildMenu;
//# sourceMappingURL=builder.js.map