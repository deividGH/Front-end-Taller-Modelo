import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component'
import { JsonComponent } from './json/json.component'



const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  
  { path: '', redirectTo: 'json', pathMatch: 'full' }, 
  
  { path: 'json', component: JsonComponent },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
