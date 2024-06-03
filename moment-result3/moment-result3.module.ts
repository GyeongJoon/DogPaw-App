import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentResult3PageRoutingModule } from './moment-result3-routing.module';

import { MomentResult3Page } from './moment-result3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentResult3PageRoutingModule
  ],
  declarations: [MomentResult3Page]
})
export class MomentResult3PageModule {}
