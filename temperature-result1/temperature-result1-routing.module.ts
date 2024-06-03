import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperatureResult1Page } from './temperature-result1.page';

const routes: Routes = [
  {
    path: '',
    component: TemperatureResult1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperatureResult1PageRoutingModule {}
