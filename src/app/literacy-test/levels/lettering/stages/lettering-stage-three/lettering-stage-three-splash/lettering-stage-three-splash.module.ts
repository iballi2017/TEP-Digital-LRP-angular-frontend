import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageThreeSplashRoutingModule } from './lettering-stage-three-splash-routing.module';
import { LetteringStageThreeSplashComponent } from './lettering-stage-three-splash.component';
import { InstructionalVidLetteringStageThreeComponent } from './instructional-vid-lettering-stage-three/instructional-vid-lettering-stage-three.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { InstructionalVidLetteringStageThreeBComponent } from './instructional-vid-lettering-stage-three-b/instructional-vid-lettering-stage-three-b.component';

@NgModule({
  declarations: [
    LetteringStageThreeSplashComponent,
    InstructionalVidLetteringStageThreeComponent,
    InstructionalVidLetteringStageThreeBComponent,
  ],
  imports: [CommonModule, LetteringStageThreeSplashRoutingModule, SharedModule],
})
export class LetteringStageThreeSplashModule {}
