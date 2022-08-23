import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentifyVowelLettersRoutingModule } from './identify-vowel-letters-routing.module';
import { IdentifyVowelLettersComponent } from './identify-vowel-letters.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { AIdentityComponent } from './a-identity/a-identity.component';
import { EIdentityComponent } from './e-identity/e-identity.component';
import { IIdentityComponent } from './i-identity/i-identity.component';
import { OIdentityComponent } from './o-identity/o-identity.component';
import { UIdentityComponent } from './u-identity/u-identity.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    IdentifyVowelLettersComponent,
    IntroductionComponent,
    AIdentityComponent,
    EIdentityComponent,
    IIdentityComponent,
    OIdentityComponent,
    UIdentityComponent,
  ],
  imports: [
    CommonModule,
    IdentifyVowelLettersRoutingModule,
    SharedModule
  ]
})
export class IdentifyVowelLettersModule { }
