import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account.component';
import { AboutTheAppComponent } from './views/about-the-app/about-the-app.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { MyInformationComponent } from './views/personal-information/my-information/my-information.component';
import { PersonalInformationComponent } from './views/personal-information/personal-information.component';
import { RespondentDetailsComponent } from './views/personal-information/respondent-details/respondent-details.component';
import { UpdatePasswordComponent } from './views/personal-information/update-password/update-password.component';
import { UpdatePersonalDetailsComponent } from './views/personal-information/update-personal-details/update-personal-details.component';
import { ReportsComponent } from './views/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', component: MyInformationComponent },
      { path: 'personal-information', component: MyInformationComponent },
      {
        path: 'update-personal-details/:userId',
        component: UpdatePersonalDetailsComponent,
      },
      {
        path: 'update-password',
        component: UpdatePasswordComponent,
      },
      {
        path: 'respondent-details/:respondentId',
        component: RespondentDetailsComponent,
      },
      { path: 'reports', component: ReportsComponent },
      { path: 'about-the-app', component: AboutTheAppComponent },
      { path: 'contact-us', component: ContactUsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
