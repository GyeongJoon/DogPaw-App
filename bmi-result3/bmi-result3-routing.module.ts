import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiResult3Page } from './bmi-result3.page';

const routes: Routes = [
  {
    path: '',
    component: BmiResult3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiResult3PageRoutingModule {}
