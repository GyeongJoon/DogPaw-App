import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperatureResult3Page } from './temperature-result3.page';

const routes: Routes = [
  {
    path: '',
    component: TemperatureResult3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperatureResult3PageRoutingModule {}
