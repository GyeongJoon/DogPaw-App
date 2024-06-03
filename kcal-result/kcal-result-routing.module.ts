import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KcalResultPage } from './kcal-result.page';

const routes: Routes = [
  {
    path: '',
    component: KcalResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KcalResultPageRoutingModule {}
