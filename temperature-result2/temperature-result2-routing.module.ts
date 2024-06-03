import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperatureResult2Page } from './temperature-result2.page';

const routes: Routes = [
  {
    path: '',
    component: TemperatureResult2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperatureResult2PageRoutingModule {}
