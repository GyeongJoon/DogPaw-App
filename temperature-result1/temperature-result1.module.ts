import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperatureResult1PageRoutingModule } from './temperature-result1-routing.module';

import { TemperatureResult1Page } from './temperature-result1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperatureResult1PageRoutingModule
  ],
  declarations: [TemperatureResult1Page]
})
export class TemperatureResult1PageModule {}
