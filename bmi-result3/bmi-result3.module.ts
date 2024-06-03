import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiResult3PageRoutingModule } from './bmi-result3-routing.module';

import { BmiResult3Page } from './bmi-result3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiResult3PageRoutingModule
  ],
  declarations: [BmiResult3Page]
})
export class BmiResult3PageModule {}
