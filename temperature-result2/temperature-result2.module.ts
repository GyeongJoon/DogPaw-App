import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperatureResult2PageRoutingModule } from './temperature-result2-routing.module';

import { TemperatureResult2Page } from './temperature-result2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperatureResult2PageRoutingModule
  ],
  declarations: [TemperatureResult2Page]
})
export class TemperatureResult2PageModule {}
