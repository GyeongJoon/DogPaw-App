import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperatureResult3PageRoutingModule } from './temperature-result3-routing.module';

import { TemperatureResult3Page } from './temperature-result3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperatureResult3PageRoutingModule
  ],
  declarations: [TemperatureResult3Page]
})
export class TemperatureResult3PageModule {}
