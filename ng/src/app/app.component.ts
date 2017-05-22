import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FoldersService } from 'app/services/folders.service';

import { ITreeOptions, TreeNode } from 'angular-tree-component'

import { B2Shared } from '../../../shared/files';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoldersService]
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app works!';
  public selectedFolder: B2Shared.TreeView.Node[];
  public treeOptions: ITreeOptions = {
    getChildren: this.handleHasChildren.bind(this)
  };
  subscription: Subscription;

  constructor(private foldersService: FoldersService, private changeDetector: ChangeDetectorRef) {
    //this.treeOptions.getChildren = this.handleHasChildren;
  }

  private handleSubscription(folder: B2Shared.TreeView.Node) {
    this.selectedFolder = [folder];
    this.changeDetector.detectChanges();
  }

  private handleHasChildren(node: TreeNode) {
    console.log('Handling has children:', node);
    return this.foldersService.loadChildrenForNode(node);
  }

  ngOnInit() {
    this.subscription = this.foldersService.folder$.subscribe(this.handleSubscription.bind(this), error => {
      console.error('error');
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
