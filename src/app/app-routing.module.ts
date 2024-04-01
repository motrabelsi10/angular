import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { EquipementComponent } from './Components/equipement/equipement.component';
import { ManagementComponent } from './Components/management/management.component';



const routes: Routes = [{ path: 'essai', component: EssaiComponent },
                        {path : 'feedback' , component : FeedbackComponent},
                        {path : 'equipement' , component : EquipementComponent},
                        {path : 'management' , component : ManagementComponent},
                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
