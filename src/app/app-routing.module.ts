import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApexComponent } from './apex/apex.component';
import { RelatedLinksComponent } from './related-links/related-links.component';
import { FlowComponent } from './flow/flow.component';
import { SuperbadgesComponent } from './superbadges/superbadges.component';
import { TrailheadsComponent } from './trailheads/trailheads.component';
import { TriggerComponent } from './trigger/trigger.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './companies/companies.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { BookOfSalesforceComponent } from './book-of-salesforce/book-of-salesforce.component';
import { Apexpage2Component } from './apex/apexpage2/apexpage2.component';
import { Apexpage3Component } from './apex/apexpage3/apexpage3.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'apex', component: ApexComponent },
  { path: 'flow', component: FlowComponent },
  { path: 'related-links', component: RelatedLinksComponent },
  { path: 'superbadges', component: SuperbadgesComponent},
  { path: 'trailheads', component: TrailheadsComponent},
  {path: 'trigger', component: TriggerComponent},
  { path: 'home', component: HomeComponent },
  {path : 'company', component: CompaniesComponent},
  {path: 'syllabus', component: SyllabusComponent},
  {path : 'book-of-salesforce', component: BookOfSalesforceComponent},
  {path : 'apexpage2', component:Apexpage2Component},
  {path : 'apexpage3', component:Apexpage3Component},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
