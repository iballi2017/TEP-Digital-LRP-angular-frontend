import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageOneSplashRoutingModule } from './basic-operations-multiplication-stage-one-splash-routing.module';
import { BasicOperationsMultiplicationStageOneSplashComponent } from './basic-operations-multiplication-stage-one-splash.component';
import { BasicOperationsMultiplicationStageOneInstructionalVideoComponent } from './basic-operations-multiplication-stage-one-instructional-video/basic-operations-multiplication-stage-one-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageOneSplashComponent,
    BasicOperationsMultiplicationStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationStageOneSplashRoutingModule
  ]
})
export class BasicOperationsMultiplicationStageOneSplashModule { }
