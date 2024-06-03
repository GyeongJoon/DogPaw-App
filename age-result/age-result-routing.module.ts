import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgeResultPage } from './age-result.page';

const routes: Routes = [
  {
    path: '',
    component: AgeResultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeResultPageRoutingModule {}
