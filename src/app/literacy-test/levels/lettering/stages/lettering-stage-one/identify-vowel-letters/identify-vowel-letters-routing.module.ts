import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIdentityComponent } from './a-identity/a-identity.component';
import { EIdentityComponent } from './e-identity/e-identity.component';
import { IIdentityComponent } from './i-identity/i-identity.component';
import { IdentifyVowelLettersComponent } from './identify-vowel-letters.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OIdentityComponent } from './o-identity/o-identity.component';
import { UIdentityComponent } from './u-identity/u-identity.component';

const routes: Routes = [
  {
    path: '',
    component: IdentifyVowelLettersComponent,
    children: [
      { path: '', component: AIdentityComponent },
      { path: 'identify-alphabet-a', component: AIdentityComponent },
      { path: 'identify-alphabet-e', component: EIdentityComponent },
      { path: 'identify-alphabet-i', component: IIdentityComponent },
      { path: 'identify-alphabet-o', component: OIdentityComponent },
      { path: 'identify-alphabet-u', component: UIdentityComponent },
    ],
  },
  { path: 'introduction', component: IntroductionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdentifyVowelLettersRoutingModule {}
