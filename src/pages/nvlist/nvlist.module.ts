import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NvlistPage } from './nvlist';

@NgModule({
  declarations: [
    NvlistPage,
  ],
  imports: [
    IonicPageModule.forChild(NvlistPage),
  ],
})
export class NvlistPageModule {}
