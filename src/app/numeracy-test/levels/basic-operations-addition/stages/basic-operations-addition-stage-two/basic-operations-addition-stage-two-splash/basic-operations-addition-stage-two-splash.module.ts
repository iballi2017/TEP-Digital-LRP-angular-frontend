import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageTwoSplashRoutingModule } from './basic-operations-addition-stage-two-splash-routing.module';
import { BasicOperationsAdditionStageTwoSplashComponent } from './basic-operations-addition-stage-two-splash.component';
import { BasicOperationsAdditionStageTwoInstructionalVideoComponent } from './basic-operations-addition-stage-two-instructional-video/basic-operations-addition-stage-two-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageTwoSplashComponent,
    BasicOperationsAdditionStageTwoInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsAdditionStageTwoSplashModule { }
