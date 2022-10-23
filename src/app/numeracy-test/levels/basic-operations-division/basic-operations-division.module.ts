import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionRoutingModule } from './basic-operations-division-routing.module';
import { BasicOperationsDivisionStageOneComponent } from './stages/basic-operations-division-stage-one/basic-operations-division-stage-one.component';
import { BasicOperationsDivisionStageTwoComponent } from './stages/basic-operations-division-stage-two/basic-operations-division-stage-two.component';
import { BasicOperationsDivisionStageThreeComponent } from './stages/basic-operations-division-stage-three/basic-operations-division-stage-three.component';
import { BasicOperationsDivisionStageFourComponent } from './stages/basic-operations-division-stage-Four/basic-operations-division-stage-four.component';
import { BasicOperationsDivisionStageFiveComponent } from './stages/basic-operations-division-stage-five/basic-operations-division-stage-five.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageOneComponent,
    BasicOperationsDivisionStageTwoComponent,
    BasicOperationsDivisionStageThreeComponent,
    BasicOperationsDivisionStageFourComponent,
    BasicOperationsDivisionStageFiveComponent,
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionRoutingModule
  ]
})
export class BasicOperationsDivisionModule { }
