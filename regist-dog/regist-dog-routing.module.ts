import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistDogPage } from './regist-dog.page';

const routes: Routes = [
  {
    path: '',
    component: RegistDogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistDogPageRoutingModule {}
