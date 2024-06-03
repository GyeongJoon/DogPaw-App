import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaterResultPageRoutingModule } from './water-result-routing.module';

import { WaterResultPage } from './water-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaterResultPageRoutingModule
  ],
  declarations: [WaterResultPage]
})
export class WaterResultPageModule {}
