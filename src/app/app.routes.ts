import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { LoginComponent } from './forms/login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'form', component: LoginComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class loginRoutingModule {}
export const routedComponents = [LoginComponent];