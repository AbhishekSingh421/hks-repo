import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms'
import { FeatureRoutingModule } from './feature-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component'
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
    
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureRoutingModule,
    HttpClientModule
  ],
  entryComponents: [ ]
})
export class FeaturesModule { }
