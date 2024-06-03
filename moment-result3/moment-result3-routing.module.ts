import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomentResult3Page } from './moment-result3.page';

const routes: Routes = [
  {
    path: '',
    component: MomentResult3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomentResult3PageRoutingModule {}
