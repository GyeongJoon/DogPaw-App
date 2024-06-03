import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentumPage } from './momentum.page';

const routes: Routes = [
  {
    path: '',
    component: MomentumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentumPageRoutingModule {}
