import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageThreeSplashRoutingModule } from './basic-operations-multiplication-stage-three-splash-routing.module';
import { BasicOperationsMultiplicationStageThreeSplashComponent } from './basic-operations-multiplication-stage-three-splash.component';
import { BasicOperationsMultiplicationStageThreeInstructionalVideoComponent } from './basic-operations-multiplication-stage-three-instructional-video/basic-operations-multiplication-stage-three-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageThreeSplashComponent,
    BasicOperationsMultiplicationStageThreeInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationStageThreeSplashRoutingModule
  ]
})
export class BasicOperationsMultiplicationStageThreeSplashModule { }
