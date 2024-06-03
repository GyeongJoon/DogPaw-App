import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiResult4Page } from './bmi-result4.page';

const routes: Routes = [
  {
    path: '',
    component: BmiResult4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiResult4PageRoutingModule {}
