import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperbadgesComponent } from './superbadges/superbadges.component';
import { TrailheadsComponent } from './trailheads/trailheads.component';
import { ApexComponent } from './apex/apex.component';
import { TriggerComponent } from './trigger/trigger.component';
import { FlowComponent } from './flow/flow.component';
import { RelatedLinksComponent } from './related-links/related-links.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { BookOfSalesforceComponent } from './book-of-salesforce/book-of-salesforce.component';
import { Apexpage2Component } from './apex/apexpage2/apexpage2.component';
import { Apexpage3Component } from './apex/apexpage3/apexpage3.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperbadgesComponent,
    TrailheadsComponent,
    ApexComponent,
    TriggerComponent,
    FlowComponent,
    RelatedLinksComponent,
    HomeComponent,
    CompaniesComponent,
    SyllabusComponent,
    BookOfSalesforceComponent,
    Apexpage2Component,
    Apexpage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
