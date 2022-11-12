import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { PersonalInformationComponent } from './views/personal-information/personal-information.component';
import { SharedModule } from '../shared/shared.module';
import { ReportsComponent } from './views/reports/reports.component';
import { AboutTheAppComponent } from './views/about-the-app/about-the-app.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { UpdatePersonalDetailsComponent } from './views/personal-information/update-personal-details/update-personal-details.component';
import { UpdatePasswordComponent } from './views/personal-information/update-password/update-password.component';
import { RespondentDetailsComponent } from './views/personal-information/respondent-details/respondent-details.component';
import { MyInformationComponent } from './views/personal-information/my-information/my-information.component';
import { RespondentListComponent } from './views/personal-information/respondent-list/respondent-list.component';
import { AddRespondentComponent } from './views/personal-information/add-respondent/add-respondent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './views/personal-information/personal-details/personal-details.component';
import { ReportListComponent } from './views/reports/report-list/report-list.component';
import { ReportDetailsComponent } from './views/reports/report-details/report-details.component';


@NgModule({
  declarations: [
    AccountComponent,
    PersonalInformationComponent,
    ReportsComponent,
    AboutTheAppComponent,
    ContactUsComponent,
    UpdatePersonalDetailsComponent,
    UpdatePasswordComponent,
    RespondentDetailsComponent,
    MyInformationComponent,
    RespondentListComponent,
    AddRespondentComponent,
    PersonalDetailsComponent,
    ReportListComponent,
    ReportDetailsComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
