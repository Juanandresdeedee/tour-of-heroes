import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmigosComponent } from './amigos/amigos.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VillanosComponent } from './villanos/villanos.component';

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  }, 
  {
    path:'villanos',
    component: VillanosComponent,
  }, 
  {
    path:'amigos',
    component: AmigosComponent,
  },{
    path: '**',
    redirectTo: 'heroes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
