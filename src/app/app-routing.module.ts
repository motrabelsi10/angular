import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './Components/user/user.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { LoginComponent } from './Components/login/login.component';



const routes: Routes = [{ path: 'essai', component: EssaiComponent },
{path : 'register' , component : RegisterComponent},
{path : 'user' , component : UserComponent},
{path : 'sidebar' , component : SideBarComponent},
{path : 'login' , component : LoginComponent},


                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
