import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'
import { routedComponents } from './app.routes';
import { loginRoutingModule } from './app.routes';

import { NavbarComponent } from './navbar/navbar.component'

@NgModule({
  declarations: [
    AppComponent,routedComponents, NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,RouterModule,loginRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
