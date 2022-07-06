import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorComponent } from './sabra/doctor/doctor.component';
import { HomeComponent } from './sabra/home/home.component';
import { LoginComponent } from './sabra/login/login.component';
import { NavbarComponent } from './sabra/navbar/navbar.component';
import { PatientComponent } from './sabra/patient/patient.component';
import { TableComponent } from './sabra/table/table.component';
import { DoctorTableComponent } from './sabra/doctor-table/doctor-table.component';
import { UpdateformComponent } from './sabra/updateform/updateform.component';


const routes: Routes = [
  {path:'',component:NavbarComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'table',component:TableComponent},
    {path:'patient',component:PatientComponent},
    {path:'doctor',component:DoctorComponent},
    {path:'Doctor-Table',component:DoctorTableComponent},
    {path:"update",component:UpdateformComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
