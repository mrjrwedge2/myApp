import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchContactPage } from './search-contact';

@NgModule({
  declarations: [
    SearchContactPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchContactPage),
  ],
})
export class SearchContactPageModule {}
