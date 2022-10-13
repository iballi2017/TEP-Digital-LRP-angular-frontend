import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionRoutingModule } from './basic-operations-subtraction-routing.module';
import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';
// import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageOneComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionRoutingModule
  ]
})
export class BasicOperationsSubtractionModule { }
