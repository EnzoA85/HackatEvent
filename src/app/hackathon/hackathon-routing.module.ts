import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HackathonPage } from './hackathon.page';

const routes: Routes = [
  {
    path: '',
    component: HackathonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HackathonPageRoutingModule {}
