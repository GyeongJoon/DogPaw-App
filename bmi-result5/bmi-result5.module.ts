import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BmiResult5PageRoutingModule } from './bmi-result5-routing.module';

import { BmiResult5Page } from './bmi-result5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BmiResult5PageRoutingModule
  ],
  declarations: [BmiResult5Page]
})
export class BmiResult5PageModule {}
