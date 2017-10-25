import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import {NvlistPage} from '../pages/nvlist/nvlist';
import {VlistPage} from '../pages/vlist/vlist';
import{AboutusPage} from '../pages/aboutus/aboutus';
import{ PastordersPage} from'../pages/pastorders/pastorders';
import{LogoutPage} from '../pages/logout/logout';
 
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html' 
})
export class MyApp {
  @ViewChild(Nav) nav: Nav; 

  // make HelloIonicPage the root (or first) page
  rootPage = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) { 
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HelloIonicPage  },
      { title: 'Breakfast Menu', component: ListPage  },
      { title: 'Vegetarian Menu (L & D)', component: VlistPage },
      { title: 'Non-Vegetarian Menu (L & D)', component: NvlistPage },
      {title: 'Past Orders',component:PastordersPage},
      {title: 'About us',component:AboutusPage},
      {title: 'Logout',component:LogoutPage}

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
