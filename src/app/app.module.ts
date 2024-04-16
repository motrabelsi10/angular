import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecrutementComponent } from './Components/recrutement/recrutement.component';
import { RecrutementprocessComponent } from './Components/recrutementprocessuser/recrutementprocess.component';
import { RecrutementUserComponent } from './Components/recrutement-user/recrutement-user.component';
import { RecrutementDetailsUserComponent } from './Components/recrutement-details-user/recrutement-details-user.component';
import { RecrutementprocessDetailsUserComponent } from './Components/recrutementprocess-details-user/recrutementprocess-details-user.component';
import { RecrutementprocessUserComponent } from './Components/recrutementprocess/recrutementprocess-user.component';
import { FormsModule } from '@angular/forms';
import { ProcessChartComponent } from './Components/process-chart/process-chart.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    RecrutementComponent,
    RecrutementprocessComponent,
    RecrutementUserComponent,
    RecrutementDetailsUserComponent,
    RecrutementprocessDetailsUserComponent,
    RecrutementprocessUserComponent,
    ProcessChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
