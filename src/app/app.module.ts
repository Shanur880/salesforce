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
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
