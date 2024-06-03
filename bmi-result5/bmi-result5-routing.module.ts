import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BmiResult5Page } from './bmi-result5.page';

const routes: Routes = [
  {
    path: '',
    component: BmiResult5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BmiResult5PageRoutingModule {}
