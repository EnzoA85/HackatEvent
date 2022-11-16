import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'hackathon',
    loadChildren: () => import('./hackathon/hackathon.module').then( m => m.HackathonPageModule)
  },
  {
    path: 'liste-hackathons',
    loadChildren: () => import('./liste-hackathons/liste-hackathons.module').then( m => m.ListeHackathonsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
