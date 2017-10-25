import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VlistPage } from './vlist';

@NgModule({
  declarations: [
    VlistPage,
  ],
  imports: [
    IonicPageModule.forChild(VlistPage),
  ],
})
export class VlistPageModule {}
