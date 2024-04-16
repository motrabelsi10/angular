import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EssaiComponent } from './essai/essai.component';
import { PublicationComponent } from './Components/publication/publication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InteractionComponent } from './Components/interaction/interaction.component';
import { PublicationUserComponent } from './Components/publication-user/publication-user.component';
import { PublicationUserDetailComponent } from './Components/publication-user-detail/publication-user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    EssaiComponent,
    PublicationComponent,
    InteractionComponent,
    PublicationComponent,
    PublicationUserComponent,
    PublicationUserDetailComponent
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
