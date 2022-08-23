import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PronunciationRoutingModule } from './pronunciation-routing.module';
import { PronunciationComponent } from './pronunciation.component';
import { PronounceAntComponent } from './slides/pronounce-ant/pronounce-ant.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PronounceEggComponent } from './slides/pronounce-egg/pronounce-egg.component';
import { PronounceIceComponent } from './slides/pronounce-ice/pronounce-ice.component';
import { PronounceOwlComponent } from './slides/pronounce-owl/pronounce-owl.component';
import { PronounceUmbrellaComponent } from './slides/pronounce-umbrella/pronounce-umbrella.component';

@NgModule({
  declarations: [PronunciationComponent, PronounceAntComponent, PronounceEggComponent, PronounceIceComponent, PronounceOwlComponent, PronounceUmbrellaComponent],
  imports: [CommonModule, PronunciationRoutingModule, SharedModule],
})
export class PronunciationModule {}
