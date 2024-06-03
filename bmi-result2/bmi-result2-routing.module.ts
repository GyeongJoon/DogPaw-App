import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiResult2Page } from './bmi-result2.page';

const routes: Routes = [
  {
    path: '',
    component: BmiResult2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiResult2PageRoutingModule {}
