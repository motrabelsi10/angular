import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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



const routes: Routes = [{ path: 'essai', component: EssaiComponent },
                        {path : 'feedback' , component : FeedbackComponent},
                        {path : 'equipement' , component : EquipementComponent},
                        {path : 'management' , component : ManagementComponent},
                        {path : 'management-user' , component : ManagementUserComponent},
                        {path : 'equipement-user' , component : EquipementUserComponent},
                        {path : 'equipement-history-user' , component : EquipementHistoryUserComponent},
                        {path : 'feedback-history-user', component : FeedbackHistoryUserComponent},
                        {path : 'feedback-user' , component : FeedbackUserComponent}

                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
