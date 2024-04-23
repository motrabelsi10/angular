import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
import { EventComponent } from './components/event/event.component';
import { EventUserComponent } from './components/event-user/event-user.component';
import { EventDetailsUserComponent } from './components/event-details-user/event-details-user.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketAdminComponent } from './components/ticket-admin/ticket-admin.component';
import { TicketChartsComponent } from './components/ticket-charts/ticket-charts.component';
import { ErrorComponent } from './components/error/error.component';
import { TaskComponent } from './components/task/task.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { TaskUserComponent } from './components/task-user/task-user.component';
import { DetailsUserComponent } from './components/task-details-user/details-user.component';
import { VolunteerUserComponent } from './components/volunteer-user/volunteer-user.component';
import { VolunteerDetailsUserComponent } from './components/volunteer-details-user/volunteer-details-user.component';
import { VolunteerTaskComponent } from './components/volunteertask/volunteertask.component';



const routes: Routes = [{path: 'essai', component: EssaiComponent },
                        {path : 'events' , component : EventComponent},
                        {path : 'eventsuser' , component : EventUserComponent},
                        {path: 'event/:idEvent', component: EventDetailsUserComponent },
                        {path:  'buyticket/:idEvent',component:TicketComponent},
                        {path:  'tickets/:idEvent',component:TicketAdminComponent},
                        { path: 'error', component: ErrorComponent },
////////////////////////////////////////////////////////////////
				{path : 'tasks' , component : TaskComponent},
                        {path : 'tasksuser' , component : TaskUserComponent},
                        {path : 'task/:idTask', component: DetailsUserComponent },
                        {path : 'volunteers' , component : VolunteerComponent},
                        {path : 'volunteersuser' , component : VolunteerUserComponent},
                        {path : 'volunteer/: idVolunteer', component: VolunteerDetailsUserComponent },
                        {path : 'volunteerstask/:idTask' , component : VolunteerTaskComponent},

/////////////////////////////////////////////////////////////////////



                        { path: '**', redirectTo: '/error' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
