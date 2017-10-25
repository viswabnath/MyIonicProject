import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import {VlistPage} from '../pages/vlist/vlist';
import {NvlistPage} from '../pages/nvlist/nvlist';
import{AboutusPage} from '../pages/aboutus/aboutus';
import{ PastordersPage} from'../pages/pastorders/pastorders';
import{LogoutPage} from '../pages/logout/logout';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
@NgModule({
  declarations: [ 
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    VlistPage,
    NvlistPage ,
    AboutusPage,
    PastordersPage,
    LogoutPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    VlistPage,
    NvlistPage,
    AboutusPage,
    PastordersPage,
    LogoutPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
