import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionFormPageRoutingModule } from './inscription-form-routing.module';

import { InscriptionFormPage } from './inscription-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionFormPageRoutingModule
  ],
  declarations: [InscriptionFormPage]
})
export class InscriptionFormPageModule {}
