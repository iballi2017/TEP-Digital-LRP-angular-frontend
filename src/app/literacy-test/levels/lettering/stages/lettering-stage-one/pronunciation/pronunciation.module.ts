import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PronunciationRoutingModule } from './pronunciation-routing.module';
import { PronunciationComponent } from './pronunciation.component';
import { PronounceAntComponent } from './slides/pronounce-ant/pronounce-ant.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PronunciationComponent, PronounceAntComponent],
  imports: [CommonModule, PronunciationRoutingModule, SharedModule],
})
export class PronunciationModule {}
