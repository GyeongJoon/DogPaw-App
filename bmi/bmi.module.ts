import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiPageRoutingModule } from './bmi-routing.module';

import { BmiPage } from './bmi.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    BmiPageRoutingModule
  ],
  declarations: [BmiPage]
})
export class BmiPageModule {}
