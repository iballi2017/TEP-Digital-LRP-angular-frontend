import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageFourRoutingModule } from './basic-operations-multiplication-stage-four-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsMultiplicationStageFourSplashComponent } from './basic-operations-multiplication-stage-four-splash/basic-operations-multiplication-stage-four-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsMultiplicationStageFourSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsMultiplicationStageFourRoutingModule],
})
export class BasicOperationsMultiplicationStageFourModule {}
