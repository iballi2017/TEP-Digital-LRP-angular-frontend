import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageFourSplashRoutingModule } from './basic-operations-addition-stage-four-splash-routing.module';
import { BasicOperationsAdditionStageFourSplashComponent } from './basic-operations-addition-stage-four-splash.component';
import { BasicOperationsAdditionStageFourInstructionalVideoComponent } from './basic-operations-addition-stage-four-instructional-video/basic-operations-addition-stage-four-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageFourSplashComponent,
    BasicOperationsAdditionStageFourInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageFourSplashRoutingModule,
    SharedModule
  ]
})
export class BasicOperationsAdditionStageFourSplashModule { }
