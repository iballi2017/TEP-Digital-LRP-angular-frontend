import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageTwoSplashRoutingModule } from './basic-operations-addition-stage-three-splash-routing.module';
import { BasicOperationsAdditionStageThreeSplashComponent } from './basic-operations-addition-stage-three-splash.component';
import { BasicOperationsAdditionStageThreeInstructionalVideoComponent } from './basic-operations-addition-stage-three-instructional-video/basic-operations-addition-stage-three-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageThreeSplashComponent,
    BasicOperationsAdditionStageThreeInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsAdditionStageThreeSplashModule { }
