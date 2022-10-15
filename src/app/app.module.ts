import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { SicknessDiseaseInfoComponent } from './sickness-disease-info/sickness-disease-info.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PatientInfoComponent,
    AppointmentComponent,
    DoctorInfoComponent,
    SicknessDiseaseInfoComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
