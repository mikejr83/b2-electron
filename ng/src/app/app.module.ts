import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TreeModule} from 'angular-tree-component'
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FileListComponent } from './fileList/fileList.component';
import { FileListChildrenComponent } from './fileList/fileListChildren.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
