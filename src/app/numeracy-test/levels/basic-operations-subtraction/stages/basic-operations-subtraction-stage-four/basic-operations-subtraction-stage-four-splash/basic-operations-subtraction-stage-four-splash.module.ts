import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageFourSplashRoutingModule } from './basic-operations-subtraction-stage-four-splash-routing.module';
import { BasicOperationsSubtractionStageFourSplashComponent } from './basic-operations-subtraction-stage-four-splash.component';
import { BasicOperationsSubtractionStageFourInstructionalVideoComponent } from './basic-operations-subtraction-stage-four-instructional-video/basic-operations-subtraction-stage-four-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageFourSplashComponent,
    BasicOperationsSubtractionStageFourInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionStageFourSplashRoutingModule
  ]
})
export class BasicOperationsSubtractionStageFourSplashModule { }
