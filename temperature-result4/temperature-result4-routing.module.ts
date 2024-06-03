import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperatureResult4Page } from './temperature-result4.page';

const routes: Routes = [
  {
    path: '',
    component: TemperatureResult4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperatureResult4PageRoutingModule {}
