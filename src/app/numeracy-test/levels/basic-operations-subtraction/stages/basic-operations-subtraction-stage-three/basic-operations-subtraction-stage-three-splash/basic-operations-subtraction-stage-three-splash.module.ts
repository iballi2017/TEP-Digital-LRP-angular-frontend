import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageThreeSplashRoutingModule } from './basic-operations-subtraction-stage-three-splash-routing.module';
import { BasicOperationsSubtractionStageThreeSplashComponent } from './basic-operations-subtraction-stage-three-splash.component';
import { BasicOperationsSubtractionStageThreeInstructionalVideoComponent } from './basic-operations-subtraction-stage-three-instructional-video/basic-operations-subtraction-stage-three-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageThreeSplashComponent,
    BasicOperationsSubtractionStageThreeInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionStageThreeSplashRoutingModule
  ]
})
export class BasicOperationsSubtractionStageThreeSplashModule { }
