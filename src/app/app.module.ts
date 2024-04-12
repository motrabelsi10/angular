import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { EventComponent } from './components/event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventUserComponent } from './components/event-user/event-user.component';
import { EventDetailsUserComponent } from './components/event-details-user/event-details-user.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketAdminComponent } from './components/ticket-admin/ticket-admin.component';
import { TicketChartsComponent } from './components/ticket-charts/ticket-charts.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CanvasJSAngularChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
