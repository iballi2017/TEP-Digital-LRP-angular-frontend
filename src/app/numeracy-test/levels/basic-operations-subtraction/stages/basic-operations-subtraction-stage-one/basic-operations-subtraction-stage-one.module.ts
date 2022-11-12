import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageOneRoutingModule } from './basic-operations-subtraction-stage-one-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsSubtractionStageOneSplashComponent } from './basic-operations-subtraction-stage-one-splash/basic-operations-subtraction-stage-one-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsSubtractionStageOneSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsSubtractionStageOneRoutingModule],
})
export class BasicOperationsSubtractionStageOneModule {}
