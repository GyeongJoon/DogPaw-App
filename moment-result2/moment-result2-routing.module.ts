import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentResult2Page } from './moment-result2.page';

const routes: Routes = [
  {
    path: '',
    component: MomentResult2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentResult2PageRoutingModule {}
