import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsingpipesComponent } from './usingpipes/usingpipes.component';
import { IsBlackListedPipe } from './is-black-listed.pipe';
import { RequireddfieldvalidatorPipe } from './requireddfieldvalidator.pipe';
import {HttpClientModule}  from '@angular/common/http';
import { UsingHttpComponent } from './using-http/using-http.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ProjectComponent,
    MainpageComponent,
    UsingpipesComponent,
    IsBlackListedPipe,
    RequireddfieldvalidatorPipe,
    UsingHttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
