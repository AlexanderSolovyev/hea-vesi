import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {OrderPage} from "../pages/order/order";
import {OkPage} from "../pages/ok/ok";
import {SettingsPage} from "../pages/settings/settings";
import {FormsModule } from "@angular/forms";
import {NativeStorage} from "@ionic-native/native-storage";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrderPage,
    OkPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrderPage,
    OkPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
