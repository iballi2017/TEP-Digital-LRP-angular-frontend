import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageFourSplashRoutingModule } from './basic-operations-multiplication-stage-four-splash-routing.module';
import { BasicOperationsMultiplicationStageFourSplashComponent } from './basic-operations-multiplication-stage-four-splash.component';
import { BasicOperationsMultiplicationStageFourInstructionalVideoComponent } from './basic-operations-multiplication-stage-four-instructional-video/basic-operations-multiplication-stage-four-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageFourSplashComponent,
    BasicOperationsMultiplicationStageFourInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationStageFourSplashRoutingModule
  ]
})
export class BasicOperationsMultiplicationStageFourSplashModule { }
