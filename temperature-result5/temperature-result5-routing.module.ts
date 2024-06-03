import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperatureResult5Page } from './temperature-result5.page';

const routes: Routes = [
  {
    path: '',
    component: TemperatureResult5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperatureResult5PageRoutingModule {}
