import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistDogPageRoutingModule } from './regist-dog-routing.module';

import { RegistDogPage } from './regist-dog.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RegistDogPageRoutingModule
  ],
  declarations: [RegistDogPage]
})
export class RegistDogPageModule {}
