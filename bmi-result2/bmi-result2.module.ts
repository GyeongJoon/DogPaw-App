import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiResult2PageRoutingModule } from './bmi-result2-routing.module';

import { BmiResult2Page } from './bmi-result2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiResult2PageRoutingModule
  ],
  declarations: [BmiResult2Page]
})
export class BmiResult2PageModule {}
