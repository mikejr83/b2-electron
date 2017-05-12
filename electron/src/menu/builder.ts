import { Menu, MenuItem } from 'electron';

import { MenuHandlers } from './handlers';

function createSeparater(): Electron.MenuItem {
    return new MenuItem({
        type: 'separator'
    });
}

function buildFileMenu(applicationMenu: Electron.Menu) {
    let openFolder = new MenuItem({
        click: MenuHandlers.file.open,
        label: 'Open Folder'
    });

    (applicationMenu.items[0].submenu as Electron.Menu).insert(0, openFolder);
    (applicationMenu.items[0].submenu as Electron.Menu).insert(1, createSeparater());
}

export function buildMenu() {
    let applicationMenu = Menu.getApplicationMenu();

    buildFileMenu(applicationMenu);

    Menu.setApplicationMenu(applicationMenu);
}