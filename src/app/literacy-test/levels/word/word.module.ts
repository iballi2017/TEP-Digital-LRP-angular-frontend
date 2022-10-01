import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordRoutingModule } from './word-routing.module';
import { WordStageOneComponent } from './stages/word-stage-one/word-stage-one.component';
import { WordStageThreeComponent } from './stages/word-stage-three/word-stage-three.component';
import { WordStageTwoComponent } from './stages/word-stage-two/word-stage-two.component';
import { WordStageFourComponent } from './stages/word-stage-four/word-stage-four.component';
import { WordStageCompletionComponent } from './word-stage-completion/word-stage-completion.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WordStageOneComponent,
    WordStageTwoComponent,
    WordStageThreeComponent,
    WordStageFourComponent,
    WordStageCompletionComponent
  ],
  imports: [CommonModule, WordRoutingModule, SharedModule],
})
export class WordModule {}
