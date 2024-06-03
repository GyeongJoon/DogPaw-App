import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentResult1PageRoutingModule } from './moment-result1-routing.module';

import { MomentResult1Page } from './moment-result1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentResult1PageRoutingModule
  ],
  declarations: [MomentResult1Page]
})
export class MomentResult1PageModule {}
