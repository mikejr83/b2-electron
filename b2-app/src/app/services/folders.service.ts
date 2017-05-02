import { Injectable } from '@angular/core';
// import { ipcRenderer } from 'electron';

@Injectable()
export class FoldersService {
    private electron;

    folder: string;
    items: string[];

    constructor() {
        this.electron = window['require']('electron');
        console.log(this.electron);
        this.electron.ipcRenderer.on('menu-open', this.folderSelectedHandler.bind(this));
    }

    private folderSelectedHandler (event: any, arg: any) {
        console.log('hasdfsadfa');
        console.log('Folder selected', arg);
    }
}