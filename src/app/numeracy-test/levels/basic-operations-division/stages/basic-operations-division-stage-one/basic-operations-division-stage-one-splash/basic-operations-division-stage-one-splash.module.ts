import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageOneSplashRoutingModule } from './basic-operations-division-stage-one-splash-routing.module';
import { BasicOperationsDivisionStageOneSplashComponent } from './basic-operations-division-stage-one-splash.component';
import { BasicOperationsDivisionStageOneInstructionalVideoComponent } from './basic-operations-division-stage-one-instructional-video/basic-operations-division-stage-one-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageOneSplashComponent,
    BasicOperationsDivisionStageOneInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionStageOneSplashRoutingModule
  ]
})
export class BasicOperationsDivisionStageOneSplashModule { }
