import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringSplashTwoRoutingModule } from './lettering-splash-two-routing.module';
import { LetteringSplashTwoComponent } from './lettering-splash-two.component';
import { AlphabetAComponent } from './alphabet-a/alphabet-a.component';
import { SayAlphabetAComponent } from './alphabet-a/say-alphabet-a/say-alphabet-a.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlphabetEComponent } from './alphabet-e/alphabet-e.component';
import { SayAlphabetEComponent } from './alphabet-e/say-alphabet-e/say-alphabet-e.component';
import { PronouncedAsEComponent } from './alphabet-e/pronounced-as-e/pronounced-as-e.component';
import { AlphabetIComponent } from './alphabet-i/alphabet-i.component';
import { PronouncedAsIComponent } from './alphabet-i/pronounced-as-i/pronounced-as-i.component';
import { SayAlphabetIComponent } from './alphabet-i/say-alphabet-i/say-alphabet-i.component';
import { AlphabetOComponent } from './alphabet-o/alphabet-o.component';
import { PronouncedAsOComponent } from './alphabet-o/pronounced-as-o/pronounced-as-o.component';
import { SayAlphabetOComponent } from './alphabet-o/say-alphabet-o/say-alphabet-o.component';
import { AlphabetUComponent } from './alphabet-u/alphabet-u.component';
import { SayAlphabetUComponent } from './alphabet-u/say-alphabet-u/say-alphabet-u.component';
import { PronouncedAsUComponent } from './alphabet-u/pronounced-as-u/pronounced-as-u.component';


@NgModule({
  declarations: [
    LetteringSplashTwoComponent,
    AlphabetAComponent,
    SayAlphabetAComponent,
    AlphabetEComponent,
    SayAlphabetEComponent,
    PronouncedAsEComponent,
    AlphabetIComponent,
    PronouncedAsIComponent,
    SayAlphabetIComponent,
    AlphabetOComponent,
    PronouncedAsOComponent,
    SayAlphabetOComponent,
    AlphabetUComponent,
    SayAlphabetUComponent,
    PronouncedAsUComponent
  ],
  imports: [
    CommonModule,
    LetteringSplashTwoRoutingModule,
    SharedModule
  ]
})
export class LetteringSplashTwoModule { }
