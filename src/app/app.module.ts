import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { EventComponent } from './components/event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventUserComponent } from './components/event-user/event-user.component';
import { EventDetailsUserComponent } from './components/event-details-user/event-details-user.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketAdminComponent } from './components/ticket-admin/ticket-admin.component';
import { TicketChartsComponent } from './components/ticket-charts/ticket-charts.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './Components/user/user.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { LoginComponent } from './Components/login/login.component';
import { ClubComponent } from './Components/club/club.component';
import { SimpleUserComponent } from './Components/simple-user/simple-user.component';
import { AdminComponent } from './Components/admin/admin.component';
import { ClubRegestrationComponent } from './Components/club-regestration/club-regestration.component';
import { HomeComponent } from './Components/home/home.component'; // Import FormsModule here



@NgModule({
  declarations: [
    AppComponent,
    EssaiComponent,

    EventComponent,
    EventUserComponent,
    EventDetailsUserComponent,
    TicketComponent,
    TicketAdminComponent,
    TicketChartsComponent,
    ErrorComponent,
    RegisterComponent,
    UserComponent,
    SideBarComponent,
    LoginComponent,
    ClubComponent,
    SimpleUserComponent,
    AdminComponent,
    ClubRegestrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
