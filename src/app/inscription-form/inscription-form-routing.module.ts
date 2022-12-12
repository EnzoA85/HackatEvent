import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionFormPage } from './inscription-form.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionFormPageRoutingModule {}
