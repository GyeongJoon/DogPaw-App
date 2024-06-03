import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperatureResult5PageRoutingModule } from './temperature-result5-routing.module';

import { TemperatureResult5Page } from './temperature-result5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperatureResult5PageRoutingModule
  ],
  declarations: [TemperatureResult5Page]
})
export class TemperatureResult5PageModule {}
