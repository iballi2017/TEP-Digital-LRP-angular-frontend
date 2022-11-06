import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageThreeRoutingModule } from './basic-operations-addition-stage-three-routing.module';
import { BasicOperationsAdditionStageThreeComponent } from './basic-operations-addition-stage-three.component';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageThreeComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageThreeRoutingModule
  ]
})
export class BasicOperationsAdditionStageThreeModule { }
