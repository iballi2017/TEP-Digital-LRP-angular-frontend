import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionOneStageOneSplashRoutingModule } from './number-recognition-one-stage-one-splash-routing.module';
import { NumberRecognitionOneStageOneInstructionalVideoComponent } from './number-recognition-one-stage-one-instructional-video/number-recognition-one-stage-one-instructional-video.component';
import { NumberRecognitionOneStageOneSplashComponent } from './number-recognition-one-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NumberRecognitionOneStageOneInstructionalVideoComponent,
    NumberRecognitionOneStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionOneStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class NumberRecognitionOneStageOneSplashModule { }
