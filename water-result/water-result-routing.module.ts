import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaterResultPage } from './water-result.page';

const routes: Routes = [
  {
    path: '',
    component: WaterResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaterResultPageRoutingModule {}
