import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageTwoRoutingModule } from './basic-operations-addition-stage-two-routing.module';
import { BasicOperationsAdditionStageTwoComponent } from './basic-operations-addition-stage-two.component';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageTwoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageTwoRoutingModule
  ]
})
export class BasicOperationsAdditionStageTwoModule { }
