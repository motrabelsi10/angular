import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecrutementComponent } from './Components/recrutement/recrutement.component';
import { RecrutementprocessComponent } from './Components/recrutementprocessuser/recrutementprocess.component';
import { RecrutementUserComponent } from './Components/recrutement-user/recrutement-user.component';
import { RecrutementprocessUserComponent } from './Components/recrutementprocess/recrutementprocess-user.component';
import { RecrutementprocessDetailsUserComponent } from './Components/recrutementprocess-details-user/recrutementprocess-details-user.component';
import { RecrutementDetailsUserComponent } from './Components/recrutement-details-user/recrutement-details-user.component';
import { EssaiComponent } from './essai/essai.component';

import { FeedbackComponent } from './Components/feedback/feedback.component';
import { EquipementComponent } from './Components/equipement/equipement.component';
import { ManagementComponent } from './Components/management/management.component';
import { ManagementUserComponent } from './Components/management-user/management-user.component';
import { EquipementUserComponent } from './Components/equipement-user/equipement-user.component';
import { FeedbackUserComponent } from './Components/feedback-user/feedback-user.component';
import { ManagementHistoryUserComponent } from './Components/management-history-user/management-history-user.component';
import { EquipementHistoryUserComponent } from './Components/equipement-history-user/equipement-history-user.component';
import { FeedbackHistoryUserComponent } from './Components/feedback-history-user/feedback-history-user.component';

import { PublicationComponent } from './Components/publication/publication.component';
import { InteractionComponent } from './Components/interaction/interaction.component';
import { PublicationUserComponent } from './Components/publication-user/publication-user.component';
import { PublicationUserDetailComponent } from './Components/publication-user-detail/publication-user-detail.component';
import { EventComponent } from './components/event/event.component';
import { EventUserComponent } from './components/event-user/event-user.component';
import { EventDetailsUserComponent } from './components/event-details-user/event-details-user.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketAdminComponent } from './components/ticket-admin/ticket-admin.component';
import { TicketChartsComponent } from './components/ticket-charts/ticket-charts.component';
import { ErrorComponent } from './components/error/error.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './Components/user/user.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { LoginComponent } from './Components/login/login.component';
import { ClubComponent } from './Components/club/club.component';
import { AdminComponent } from './Components/admin/admin.component';
import { SimpleUserComponent } from './Components/simple-user/simple-user.component';
import { ClubRegestrationComponent } from './Components/club-regestration/club-regestration.component';
import { HomeComponent } from './Components/home/home.component';





const routes: Routes = [{ path: 'essai', component: EssaiComponent },
                        {path : 'feedback' , component : FeedbackComponent},
                        {path : 'equipement' , component : EquipementComponent},
                        {path : 'management' , component : ManagementComponent},
                        {path : 'management-user' , component : ManagementUserComponent},
                        {path : 'equipement-user' , component : EquipementUserComponent},
                        {path : 'equipement-history-user' , component : EquipementHistoryUserComponent},
                        {path : 'feedback-history-user', component : FeedbackHistoryUserComponent},
                        {path : 'feedback-user' , component : FeedbackUserComponent}
{ path: 'publication', component: PublicationComponent },  
{ path: 'interactions', component: InteractionComponent },
{ path: 'publication/user', component: PublicationUserComponent },
{ path: 'publication/user/:id', component: PublicationUserDetailComponent },
{path : 'register' , component : RegisterComponent},
{path : 'admin' , component : UserComponent},
{path : 'sidebar' , component : SideBarComponent},
{path : 'login' , component : LoginComponent },
{path : 'club' , component : ClubComponent},
{path : 'user' , component : SimpleUserComponent},
{path : 'ClubRegister' , component : ClubRegestrationComponent},
{path : 'home' , component : HomeComponent},
{path: 'essai', component: EssaiComponent },
{path : 'events' , component : EventComponent}, 
{path : 'eventsuser' , component : EventUserComponent},
{path: 'event/:idEvent', component: EventDetailsUserComponent },
{path:  'buyticket/:idEvent',component:TicketComponent},
{path:  'tickets/:idEvent',component:TicketAdminComponent},
{ path: 'error', component: ErrorComponent },
{ path: '**', redirectTo: '/error' },
{ path: 'recrutement', component: RecrutementComponent },
{path : 'recrutementprocess' , component : RecrutementprocessComponent},
{path : 'recrutementuser' , component : RecrutementUserComponent},
{ path: 'recrutementprocessuser/:idRecrutement', component: RecrutementprocessUserComponent },
{ path: 'recrutementprocessdetailsuser/:idProcess', component: RecrutementprocessDetailsUserComponent },
{ path: 'recrutementuserdetails/:idRecrutement', component: RecrutementDetailsUserComponent },

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
