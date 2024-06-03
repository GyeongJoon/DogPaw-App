import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistDogListPage } from './regist-dog-list.page';

const routes: Routes = [
  {
    path: '',
    component: RegistDogListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistDogListPageRoutingModule {}
