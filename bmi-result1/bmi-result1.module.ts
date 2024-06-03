import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiResult1PageRoutingModule } from './bmi-result1-routing.module';

import { BmiResult1Page } from './bmi-result1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiResult1PageRoutingModule
  ],
  declarations: [BmiResult1Page]
})
export class BmiResult1PageModule {}
