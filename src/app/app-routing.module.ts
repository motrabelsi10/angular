import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
import { PublicationComponent } from './Components/publication/publication.component';
import { InteractionComponent } from './Components/interaction/interaction.component';
import { PublicationUserComponent } from './Components/publication-user/publication-user.component';
import { PublicationUserDetailComponent } from './Components/publication-user-detail/publication-user-detail.component';




const routes: Routes = [{ path: 'essai', component: EssaiComponent },
{ path: 'publication', component: PublicationComponent },  
{ path: 'interactions', component: InteractionComponent },
{ path: 'publication/user', component: PublicationUserComponent },
{ path: 'publication/user/:id', component: PublicationUserDetailComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
