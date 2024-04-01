import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';



const routes: Routes = [{ path: 'essai', component: EssaiComponent },
                        {path : 'feedback' , component : FeedbackComponent},
                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
