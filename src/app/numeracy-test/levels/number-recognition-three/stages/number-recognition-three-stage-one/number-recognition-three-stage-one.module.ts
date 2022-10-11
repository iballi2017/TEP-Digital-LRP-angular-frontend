import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberRecognitionThreeStageOneRoutingModule } from './number-recognition-three-stage-one-routing.module';
import { NumberRecognitionThreeStageOneComponent } from './number-recognition-three-stage-one.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NumberRecognitionThreeStageOneComponent
  ],
  imports: [
    CommonModule,
    NumberRecognitionThreeStageOneRoutingModule,
    SharedModule
  ]
})
export class NumberRecognitionThreeStageOneModule { }
