import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordStageOneSplashRoutingModule } from './word-stage-one-splash-routing.module';
import { WordStageOneInstructionalVideoComponent } from './word-stage-one-instructional-video/word-stage-one-instructional-video.component';
import { WordStageOneSplashComponent } from './word-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WordStageOneInstructionalVideoComponent,
    WordStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    WordStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class WordStageOneSplashModule { }
