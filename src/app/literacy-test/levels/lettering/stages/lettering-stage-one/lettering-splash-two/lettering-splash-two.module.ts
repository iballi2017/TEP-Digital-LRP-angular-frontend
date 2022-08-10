import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringSplashTwoRoutingModule } from './lettering-splash-two-routing.module';
import { LetteringSplashTwoComponent } from './lettering-splash-two.component';
import { AlphabetAComponent } from './alphabet-a/alphabet-a.component';
import { SayAlphabetAComponent } from './say-alphabet-a/say-alphabet-a.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PronounceAntComponent } from './pronounce-ant/pronounce-ant.component';


@NgModule({
  declarations: [
    LetteringSplashTwoComponent,
    AlphabetAComponent,
    SayAlphabetAComponent,
    PronounceAntComponent
  ],
  imports: [
    CommonModule,
    LetteringSplashTwoRoutingModule,
    SharedModule
  ]
})
export class LetteringSplashTwoModule { }
