import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeechSynthesisUtteranceComponent } from './speech-synthesis-utterance/speech-synthesis-utterance.component';

@NgModule({
  declarations: [PracticeComponent, SpeechSynthesisUtteranceComponent],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PracticeModule {}
