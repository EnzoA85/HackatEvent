import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeHackathonsPageRoutingModule } from './liste-hackathons-routing.module';

import { ListeHackathonsPage } from './liste-hackathons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeHackathonsPageRoutingModule
  ],
  declarations: [ListeHackathonsPage]
})
export class ListeHackathonsPageModule {}
