import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './Components/user/user.component';
import { FormsModule } from '@angular/forms';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { LoginComponent } from './Components/login/login.component';
import { ClubComponent } from './Components/club/club.component';
import { SimpleUserComponent } from './Components/simple-user/simple-user.component';
import { AdminComponent } from './Components/admin/admin.component'; // Import FormsModule here


@NgModule({
  declarations: [
    AppComponent,
    EssaiComponent,
    RegisterComponent,
    UserComponent,
    SideBarComponent,
    LoginComponent,
    ClubComponent,
    SimpleUserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
