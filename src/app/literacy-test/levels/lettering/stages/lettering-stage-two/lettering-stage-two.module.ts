import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageTwoRoutingModule } from './lettering-stage-two-routing.module';
import { ConsonantsLetteringSplashComponent } from './consonants-lettering-splash/consonants-lettering-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ConsonantsLetteringSplashComponent
  ],
  imports: [
    CommonModule,
    LetteringStageTwoRoutingModule,
    SharedModule
  ]
})
export class LetteringStageTwoModule { }
