import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { FeedbackComponent } from './Components/feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './Components/management/management.component';
import { EquipementComponent } from './Components/equipement/equipement.component';
import { EquipementUserComponent } from './Components/equipement-user/equipement-user.component';
import { FeedbackUserComponent } from './Components/feedback-user/feedback-user.component';
import { ManagementUserComponent } from './Components/management-user/management-user.component';


@NgModule({
  declarations: [
    AppComponent,
    EssaiComponent,
    FeedbackComponent,
    ManagementComponent,
    EquipementComponent,
    EquipementUserComponent,
    FeedbackUserComponent,
    ManagementUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
