import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KcalResultPageRoutingModule } from './kcal-result-routing.module';

import { KcalResultPage } from './kcal-result.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    KcalResultPageRoutingModule
  ],
  declarations: [KcalResultPage]
})
export class KcalResultPageModule {}
