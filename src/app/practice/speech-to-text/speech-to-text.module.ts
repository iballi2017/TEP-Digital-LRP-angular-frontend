import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeechToTextRoutingModule } from './speech-to-text-routing.module';
import { SpeechToTextComponent } from './speech-to-text.component';


@NgModule({
  declarations: [
    SpeechToTextComponent
  ],
  imports: [
    CommonModule,
    SpeechToTextRoutingModule
  ]
})
export class SpeechToTextModule { }
