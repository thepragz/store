import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddProductInfoPage } from './add-product-info';

@NgModule({
  declarations: [
    AddProductInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddProductInfoPage),
  ],
})
export class AddProductInfoPageModule {}
