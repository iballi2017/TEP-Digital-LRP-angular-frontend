import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationRoutingModule } from './basic-operations-multiplication-routing.module';
import { BasicOperationsMultiplicationStageOneComponent } from './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one.component';
// import { BasicOperationsmultiplicationStageOneComponent } from './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one.component';


@NgModule({
  declarations: [
    BasicOperationsMultiplicationStageOneComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsMultiplicationRoutingModule
  ]
})
export class BasicOperationsMultiplicationModule { }
