import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { DaysComponent } from './days/days.component';
import { Error404Component } from './error404/error404.component';
import { FirstDayComponent } from './first-day/first-day.component';

const routes: Routes = [
  {path:"all", component:AllComponent},
  {path:"days", children:[
    {path:"" , component:DaysComponent },
    {path : ":id" , component:FirstDayComponent }
  ]} ,
  {path : '' , redirectTo :"all" , pathMatch :"full" } , 
  {path:"**" , component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
