import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './sabra/home/home.component';
import { LoginComponent } from './sabra/login/login.component';
import { TableComponent } from './sabra/table/table.component';
import { PatientComponent } from './sabra/patient/patient.component';
import { DoctorComponent } from './sabra/doctor/doctor.component';
import { NavbarComponent } from './sabra/navbar/navbar.component';
import { DoctorTableComponent } from './sabra/doctor-table/doctor-table.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateformComponent } from './sabra/updateform/updateform.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TableComponent,
    PatientComponent,
    DoctorComponent,
    NavbarComponent,
    DoctorTableComponent,
    UpdateformComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
