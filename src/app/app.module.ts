import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { StatueComponent } from './statue/statue.component';
import {AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ServiceComponent,
    StatueComponent,
    HeaderComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
