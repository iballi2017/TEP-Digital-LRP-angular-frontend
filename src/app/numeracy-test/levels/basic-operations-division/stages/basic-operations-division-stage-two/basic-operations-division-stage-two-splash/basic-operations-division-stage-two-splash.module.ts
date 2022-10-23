import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageTwoSplashRoutingModule } from './basic-operations-division-stage-two-splash-routing.module';
import { BasicOperationsDivisionStageTwoSplashComponent } from './basic-operations-division-stage-two-splash.component';
import { BasicOperationsDivisionStageTwoInstructionalVideoComponent } from './basic-operations-division-stage-two-instructional-video/basic-operations-division-stage-two-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageTwoSplashComponent,
    BasicOperationsDivisionStageTwoInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionStageTwoSplashRoutingModule
  ]
})
export class BasicOperationsDivisionStageTwoSplashModule { }
