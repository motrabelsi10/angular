import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TaskComponent } from './components/task/task.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { TaskUserComponent } from './components/task-user/task-user.component';
import { DetailsUserComponent } from './components/task-details-user/details-user.component';
import { VolunteerUserComponent } from './components/volunteer-user/volunteer-user.component';
import { VolunteerDetailsUserComponent } from './components/volunteer-details-user/volunteer-details-user.component';
import { VolunteerTaskComponent } from './components/volunteertask/volunteertask.component';


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
///////////////////////////////////////////
    TaskComponent,
    VolunteerComponent,
    TaskUserComponent,
    DetailsUserComponent,
    VolunteerUserComponent,
    VolunteerTaskComponent,
    VolunteerDetailsUserComponent
////////////////////////////////////////////// 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CanvasJSAngularChartsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
