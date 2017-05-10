import { Component, OnDestroy } from '@angular/core';
import { Subscription }   from 'rxjs/Subscription';

import { FoldersService } from 'app/services/folders.service';

import { Files } from '../../../shared/files';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoldersService]
})
export class AppComponent  implements OnDestroy {
  title = 'app works!';
  selectedFolder: Files.FileSystemObject;
  subscription: Subscription;

  constructor(private foldersService: FoldersService) {
    console.log(foldersService);
    this.subscription = foldersService.folder$.subscribe((folder) => {
      this.selectedFolder = folder;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
