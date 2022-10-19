import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionRoutingModule } from './basic-operations-subtraction-routing.module';
import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';
import { BasicOperationsSubtractionStageTwoComponent } from './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two.component';
import { BasicOperationsSubtractionStageThreeComponent } from './stages/basic-operations-subtraction-stage-three/basic-operations-subtraction-stage-three.component';
import { BasicOperationsSubtractionStageFourComponent } from './stages/basic-operations-subtraction-stage-four/basic-operations-subtraction-stage-four.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageOneComponent,
    BasicOperationsSubtractionStageTwoComponent,
    BasicOperationsSubtractionStageThreeComponent,
    BasicOperationsSubtractionStageFourComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionRoutingModule
  ]
})
export class BasicOperationsSubtractionModule { }
