import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiResult1Page } from './bmi-result1.page';

const routes: Routes = [
  {
    path: '',
    component: BmiResult1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiResult1PageRoutingModule {}
