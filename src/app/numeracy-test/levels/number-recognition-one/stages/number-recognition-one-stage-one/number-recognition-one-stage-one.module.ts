import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityComponent } from './activity/activity.component';
import { NumberRecognitionOneStageOneSplashComponent } from './number-recognition-one-stage-one-splash/number-recognition-one-stage-one-splash.component';
import { NumberRecognitionOneStageOneRoutingModule } from './number-recognition-one-stage-one-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ActivityComponent,
    NumberRecognitionOneStageOneSplashComponent,
  ],
  imports: [
    CommonModule,
    NumberRecognitionOneStageOneRoutingModule,
    SharedModule,
  ],
})
export class NumberRecognitionOneStageOneModule {}
