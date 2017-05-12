import { Component, Input } from '@angular/core';

import { Files } from '../../../../shared/files';

@Component({
  selector: 'file-list',
  templateUrl: './fileList.component.html',
  styleUrls: ['./fileList.component.css']
})
export class FileListComponent {
  @Input() rootFolder: Files.FileSystemObject;
}
