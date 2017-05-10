import { Injectable } from '@angular/core';
import { ipcRenderer, remote } from 'electron';

import { Subject } from 'rxjs/Subject';

import { Files } from '../../../../shared/files';

import { environment } from '../../environments/environment';

@Injectable()
export class FoldersService {
  private folderSource = new Subject<Files.FileSystemObject>();

  folder$ = this.folderSource.asObservable();

  constructor() {
    ipcRenderer.on('menu-open', (evt, arg) => {
      this.selectedFolderContentsUpdated(evt, arg);
    });
  }

  private selectedFolderContentsUpdated(evt: any, arg: any) {
    console.log('Folder selected', arg as Files.FileSystemObject);

    this.folderSource.next(arg as Files.FileSystemObject);
  }
}


