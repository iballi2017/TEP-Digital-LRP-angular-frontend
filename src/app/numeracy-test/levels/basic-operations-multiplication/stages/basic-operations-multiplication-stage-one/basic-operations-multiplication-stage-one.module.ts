import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageOneRoutingModule } from './basic-operations-multiplication-stage-one-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsMultiplicationStageOneSplashComponent } from './basic-operations-multiplication-stage-one-splash/basic-operations-multiplication-stage-one-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsMultiplicationStageOneSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsMultiplicationStageOneRoutingModule],
})
export class BasicOperationsSubtractionStageOneModule {}
