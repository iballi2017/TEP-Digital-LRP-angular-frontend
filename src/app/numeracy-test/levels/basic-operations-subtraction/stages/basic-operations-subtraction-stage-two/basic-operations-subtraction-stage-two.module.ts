import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicOperationsSubtractionStageTwoRoutingModule } from './basic-operations-subtraction-stage-two-routing.module';
import { BasicOperationsSubtractionStageTwoComponent } from './basic-operations-subtraction-stage-two.component';


@NgModule({
  declarations: [
    BasicOperationsSubtractionStageTwoComponent
  ],
  imports: [
    CommonModule,
    BasicOperationsSubtractionStageTwoRoutingModule
  ]
})
export class BasicOperationsSubtractionStageTwoModule { }
