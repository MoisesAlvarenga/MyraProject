import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { LoginComponent } from './login-screen/login/login.component';
import { DashboardMenuComponent } from './dashboard-menu/dashboard-menu.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardTeamComponent } from './dashboard-menu/card-team/card-team.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    LoginComponent,
    DashboardMenuComponent,
    CardTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
