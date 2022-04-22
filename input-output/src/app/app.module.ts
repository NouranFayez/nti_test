import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { SingleComponent } from './single/single.component';
import { DaysComponent } from './days/days.component';
import { Single2Component } from './single2/single2.component';
import { FirstDayComponent } from './first-day/first-day.component';
import { Error404Component } from './error404/error404.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    SingleComponent,
    DaysComponent,
    Single2Component,
    FirstDayComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
