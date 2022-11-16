import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeHackathonsPage } from './liste-hackathons.page';

const routes: Routes = [
  {
    path: '',
    component: ListeHackathonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeHackathonsPageRoutingModule {}
