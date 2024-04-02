import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecrutementComponent } from './Components/recrutement/recrutement.component';
import { RecrutementprocessComponent } from './Components/recrutementprocessuser/recrutementprocess.component';
import { RecrutementUserComponent } from './Components/recrutement-user/recrutement-user.component';
import { RecrutementprocessUserComponent } from './Components/recrutementprocess/recrutementprocess-user.component';
import { RecrutementprocessDetailsUserComponent } from './Components/recrutementprocess-details-user/recrutementprocess-details-user.component';
import { RecrutementDetailsUserComponent } from './Components/recrutement-details-user/recrutement-details-user.component';

const routes: Routes = [{ path: 'recrutement', component: RecrutementComponent },
{path : 'recrutementprocess' , component : RecrutementprocessComponent},
{path : 'recrutementuser' , component : RecrutementUserComponent},
{ path: 'recrutementprocessuser/:idRecrutement', component: RecrutementprocessUserComponent },
{ path: 'recrutementprocessdetailsuser/:idProcess', component: RecrutementprocessDetailsUserComponent },
{ path: 'recrutementuserdetails/:idRecrutement', component: RecrutementDetailsUserComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
