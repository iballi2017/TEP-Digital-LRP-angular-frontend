import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionRoutingModule } from './basic-operations-division-routing.module';
import { BasicOperationsDivisionStageOneComponent } from './stages/basic-operations-division-stage-one/basic-operations-division-stage-one.component';


@NgModule({
  declarations: [
    BasicOperationsDivisionStageOneComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsDivisionRoutingModule
  ]
})
export class BasicOperationsDivisionModule { }
