import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageFiveSplashRoutingModule } from './basic-operations-division-stage-five-splash-routing.module';
import { BasicOperationsDivisionStageFiveSplashComponent } from './basic-operations-division-stage-five-splash.component';
import { BasicOperationsDivisionStageFiveInstructionalVideoComponent } from './basic-operations-division-stage-five-instructional-video/basic-operations-division-stage-five-instructional-video.component';
// import { BasicOperationsDivisionStageFiveInstructionalVideoComponent } from './basic-operations-division-stage-five-instructional-video/basic-operations-division-stage-five-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageFiveSplashComponent,
    BasicOperationsDivisionStageFiveInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionStageFiveSplashRoutingModule
  ]
})
export class BasicOperationsDivisionStageFiveSplashModule { }
