import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentumPageRoutingModule } from './momentum-routing.module';

import { MomentumPage } from './momentum.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    MomentumPageRoutingModule
  ],
  declarations: [MomentumPage]
})
export class MomentumPageModule {}
