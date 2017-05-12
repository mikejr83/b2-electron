import { Component, Input } from '@angular/core';

import { Files } from '../../../../shared/files';

@Component({
  selector: 'file-list-children',
  templateUrl: './fileListChildren.component.html'
})
export class FileListChildrenComponent {
  @Input() children: Files.FileSystemObject[];
}
