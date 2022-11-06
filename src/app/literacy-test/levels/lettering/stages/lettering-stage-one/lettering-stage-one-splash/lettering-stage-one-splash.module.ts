import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageOneSplashRoutingModule } from './lettering-stage-one-splash-routing.module';
import { LetteringStageOneInstructionalVideoComponent } from './lettering-stage-one-instructional-video/lettering-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LetteringStageOneSplashComponent } from './lettering-stage-one-splash.component';

@NgModule({
  declarations: [LetteringStageOneInstructionalVideoComponent, LetteringStageOneSplashComponent],
  imports: [CommonModule, LetteringStageOneSplashRoutingModule, SharedModule],
})
export class LetteringStageOneSplashModule {}
