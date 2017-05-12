import { Component, ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { FoldersService } from 'app/services/folders.service';

import { TreeView } from '../../../shared/files';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoldersService]
})
export class AppComponent implements OnDestroy, OnInit {
  title = 'app works!';
  public selectedFolder: TreeView.Node[];
  subscription: Subscription;

  constructor(private foldersService: FoldersService, private changeDetector: ChangeDetectorRef) {

  }

  private handleSubscription(folder: TreeView.Node) {
      this.selectedFolder = [folder];
      this.changeDetector.detectChanges();
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
