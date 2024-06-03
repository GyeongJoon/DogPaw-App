import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiResult4PageRoutingModule } from './bmi-result4-routing.module';

import { BmiResult4Page } from './bmi-result4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiResult4PageRoutingModule
  ],
  declarations: [BmiResult4Page]
})
export class BmiResult4PageModule {}
