import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentResult1Page } from './moment-result1.page';

const routes: Routes = [
  {
    path: '',
    component: MomentResult1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentResult1PageRoutingModule {}
