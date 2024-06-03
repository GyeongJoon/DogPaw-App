import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistDogListPageRoutingModule } from './regist-dog-list-routing.module';

import { RegistDogListPage } from './regist-dog-list.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RegistDogListPageRoutingModule
  ],
  declarations: [RegistDogListPage]
})
export class RegistDogListPageModule {}
