import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentResult2PageRoutingModule } from './moment-result2-routing.module';

import { MomentResult2Page } from './moment-result2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentResult2PageRoutingModule
  ],
  declarations: [MomentResult2Page]
})
export class MomentResult2PageModule {}
