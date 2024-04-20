import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EssaiComponent } from './essai/essai.component';
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
{path : 'register' , component : RegisterComponent},
{path : 'admin' , component : UserComponent},
{path : 'sidebar' , component : SideBarComponent},
{path : 'login' , component : LoginComponent },
{path : 'club' , component : ClubComponent},
{path : 'user' , component : SimpleUserComponent},
{path : 'ClubRegister' , component : ClubRegestrationComponent},
{path : 'home' , component : HomeComponent},






                       ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
