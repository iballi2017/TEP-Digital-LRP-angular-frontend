import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageTwoPronunciationRoutingModule } from './lettering-stage-two-pronunciation-routing.module';
import { PronounceBallComponent } from './slides/pronounce-ball/pronounce-ball.component';
import { LetteringStageTwoPronunciationComponent } from './lettering-stage-two-pronunciation.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PronounceBallComponent,
    LetteringStageTwoPronunciationComponent
  ],
  imports: [
    CommonModule,
    LetteringStageTwoPronunciationRoutingModule,
    SharedModule
  ]
})
export class LetteringStageTwoPronunciationModule { }
