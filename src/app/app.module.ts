import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule} from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {ContactPage} from "../pages/contact/contact";
import {AddContactPage} from "../pages/add-contact/add-contact";
import {ContactListPage} from "../pages/contact-list/contact-list";
import {EditContactPage} from "../pages/edit-contact/edit-contact";
import {SearchContactPage} from "../pages/search-contact/search-contact";
import {SettingsPage} from "../pages/settings/settings";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    AddContactPage,
    ContactListPage,
    EditContactPage,
    SearchContactPage,
    SettingsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    AddContactPage,
    ContactListPage,
    EditContactPage,
    SearchContactPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
