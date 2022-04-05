import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { VillanosComponent } from './villanos/villanos.component';
import { AmigosComponent } from './amigos/amigos.component';
import { NavComponent } from './nav/nav.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path:'',component: HeroesComponent },
  { path:'amigos', component: AmigosComponent },
  { path:'villanos', component: VillanosComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    VillanosComponent,
    AmigosComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
