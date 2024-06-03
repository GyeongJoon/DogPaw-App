import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgeResultPageRoutingModule } from './age-result-routing.module';

import { AgeResultPage } from './age-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgeResultPageRoutingModule
  ],
  declarations: [AgeResultPage]
})
export class AgeResultPageModule {}
