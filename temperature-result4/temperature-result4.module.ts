import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperatureResult4PageRoutingModule } from './temperature-result4-routing.module';

import { TemperatureResult4Page } from './temperature-result4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperatureResult4PageRoutingModule
  ],
  declarations: [TemperatureResult4Page]
})
export class TemperatureResult4PageModule {}
