import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageFourRoutingModule } from './basic-operations-addition-stage-four-routing.module';
import { BasicOperationsAdditionStageFourComponent } from './basic-operations-addition-stage-four.component';


@NgModule({
  declarations: [
    BasicOperationsAdditionStageFourComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageFourRoutingModule
  ]
})
export class BasicOperationsAdditionStageFourModule { }
