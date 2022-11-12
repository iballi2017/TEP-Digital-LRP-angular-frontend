import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsSubtractionStageThreeRoutingModule } from './basic-operations-subtraction-stage-three-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsSubtractionStageThreeSplashComponent } from './basic-operations-subtraction-stage-three-splash/basic-operations-subtraction-stage-three-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsSubtractionStageThreeSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsSubtractionStageThreeRoutingModule],
})
export class BasicOperationsSubtractionStageThreeModule {}
