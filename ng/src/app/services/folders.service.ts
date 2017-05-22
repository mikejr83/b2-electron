import { Injectable } from '@angular/core';
import { ipcRenderer, remote } from 'electron';

import { Subject } from 'rxjs/Subject';
import { TreeNode } from 'angular-tree-component'

import { B2Shared } from '../../../../shared/files';

import { environment } from '../../environments/environment';

@Injectable()
export class FoldersService {
  private folderSource = new Subject<B2Shared.TreeView.Node>();

  folder$ = this.folderSource.asObservable();

  constructor() {
    ipcRenderer.on('menu-open', (evt, arg) => {
      this.selectedFolderContentsUpdated(evt, arg);
    });
  }

  private selectedFolderContentsUpdated(evt: any, arg: any) {
    console.log('Folder selected', arg as B2Shared.TreeView.Node);

    this.folderSource.next(arg as B2Shared.TreeView.Node);
  }

  loadChildrenForNode(node: TreeNode) :Promise<B2Shared.TreeView.Node> {

    return new Promise((resolve, reject) => {
      ipcRenderer.send('treeview-getfolderchildren', node.data as B2Shared.TreeView.Node);

      ipcRenderer.once('treeview-getfolderchildren' + (node.data as B2Shared.TreeView.Node).id, (e, args) => {
        let node = args as B2Shared.TreeView.Node;

        resolve(node.children);
      });
    });
  }
}


