import { Component } from '@angular/core';
import { FoldersService } from 'app/services/folders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FoldersService]
})
export class AppComponent {
  title = 'app works!';

  constructor(private folderService:FoldersService) {
  }
}
