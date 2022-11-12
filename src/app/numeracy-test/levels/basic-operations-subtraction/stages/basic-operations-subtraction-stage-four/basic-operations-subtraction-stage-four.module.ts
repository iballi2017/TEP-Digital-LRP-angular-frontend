import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageFourRoutingModule } from './basic-operations-subtraction-stage-four-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsSubtractionStageFourSplashComponent } from './basic-operations-subtraction-stage-four-splash/basic-operations-subtraction-stage-four-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsSubtractionStageFourSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsSubtractionStageFourRoutingModule],
})
export class BasicOperationsSubtractionStageFourModule {}
