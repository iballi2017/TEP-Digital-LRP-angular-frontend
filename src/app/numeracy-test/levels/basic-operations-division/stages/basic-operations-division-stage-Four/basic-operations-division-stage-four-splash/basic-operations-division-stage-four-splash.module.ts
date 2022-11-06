import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageFourSplashRoutingModule } from './basic-operations-division-stage-four-splash-routing.module';
import { BasicOperationsDivisionStageFourSplashComponent } from './basic-operations-division-stage-four-splash.component';
import { BasicOperationsDivisionStageFourInstructionalVideoComponent } from './basic-operations-division-stage-four-instructional-video/basic-operations-division-stage-four-instructional-video.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageFourSplashComponent,
    BasicOperationsDivisionStageFourInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionStageFourSplashRoutingModule
  ]
})
export class BasicOperationsDivisionStageFourSplashModule { }
