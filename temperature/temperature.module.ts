import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperaturePageRoutingModule } from './temperature-routing.module';

import { TemperaturePage } from './temperature.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    TemperaturePageRoutingModule
  ],
  declarations: [TemperaturePage]
})
export class TemperaturePageModule {}
