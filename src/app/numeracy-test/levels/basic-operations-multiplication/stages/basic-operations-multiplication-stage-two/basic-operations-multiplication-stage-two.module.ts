import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageTwoRoutingModule } from './basic-operations-multiplication-stage-two-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsMultiplicationStageTwoSplashComponent } from './basic-operations-multiplication-stage-two-splash/basic-operations-multiplication-stage-two-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsMultiplicationStageTwoSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsMultiplicationStageTwoRoutingModule],
})
export class BasicOperationsSubtractionStageTwoModule {}
