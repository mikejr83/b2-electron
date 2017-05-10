import { Component, Input } from '@angular/core';

import { Files } from '../../../../shared/files';

@Component({
  selector: 'file-list',
  templateUrl: './fileList.component.html',
  styleUrls: ['./fileList.component.css']
})
export class FileListComponent {
  private _rootFolder: Files.FileSystemObject;

  @Input() set rootFolder(rootFolder: Files.FileSystemObject) {
    this._rootFolder = rootFolder;
    console.log('rootFolder setter', this._rootFolder);
  }
  get rootFolder(): Files.FileSystemObject {
    return this._rootFolder;
  }
}
