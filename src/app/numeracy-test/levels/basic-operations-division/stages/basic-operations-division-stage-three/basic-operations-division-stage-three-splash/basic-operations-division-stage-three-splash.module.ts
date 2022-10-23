import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageThreeSplashRoutingModule } from './basic-operations-division-stage-three-splash-routing.module';
import { BasicOperationsDivisionStageThreeSplashComponent } from './basic-operations-division-stage-three-splash.component';
import { BasicOperationsDivisionStageThreeInstructionalVideoComponent } from './basic-operations-division-stage-three-instructional-video/basic-operations-division-stage-three-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageThreeSplashComponent,
    BasicOperationsDivisionStageThreeInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionStageThreeSplashRoutingModule
  ]
})
export class BasicOperationsDivisionStageThreeSplashModule { }
