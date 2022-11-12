import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionTwoStageOneRoutingModule } from './number-recognition-two-stage-one-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NumberRecognitionTwoStageOneSplashComponent } from './number-recognition-two-stage-one-splash/number-recognition-two-stage-one-splash.component';
import { ActivityComponent } from './activity/activity.component';


@NgModule({
  declarations: [
    ActivityComponent,
    NumberRecognitionTwoStageOneSplashComponent,],
  imports: [
    CommonModule,
    NumberRecognitionTwoStageOneRoutingModule,
    SharedModule,
  ]
})
export class NumberRecognitionTwoStageOneModule { }
