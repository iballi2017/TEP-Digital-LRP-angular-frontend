import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringSplashTwoRoutingModule } from './lettering-splash-two-routing.module';
import { LetteringSplashTwoComponent } from './lettering-splash-two.component';
import { AlphabetAComponent } from './alphabet-a/alphabet-a.component';
import { SayAlphabetAComponent } from './alphabet-a/say-alphabet-a/say-alphabet-a.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PronounceAntComponent } from './pronounce-ant/pronounce-ant.component';
import { AlphabetEComponent } from './alphabet-e/alphabet-e.component';
import { SayAlphabetEComponent } from './alphabet-e/say-alphabet-e/say-alphabet-e.component';
import { PronouncedAsEComponent } from './alphabet-e/pronounced-as-e/pronounced-as-e.component';


@NgModule({
  declarations: [
    LetteringSplashTwoComponent,
    AlphabetAComponent,
    SayAlphabetAComponent,
    PronounceAntComponent,
    AlphabetEComponent,
    SayAlphabetEComponent,
    PronouncedAsEComponent
  ],
  imports: [
    CommonModule,
    LetteringSplashTwoRoutingModule,
    SharedModule
  ]
})
export class LetteringSplashTwoModule { }
