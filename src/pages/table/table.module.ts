import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TablePage } from './table';

@NgModule({
  declarations: [
    TablePage,
  ],
  imports: [
    IonicPageModule.forChild(TablePage),
  ],
  exports: [
    TablePage
  ]
})
export class TimeModule {}
