import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsMultiplicationStageThreeRoutingModule } from './basic-operations-multiplication-stage-three-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsMultiplicationStageThreeSplashComponent } from './basic-operations-multiplication-stage-three-splash/basic-operations-multiplication-stage-three-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsMultiplicationStageThreeSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsMultiplicationStageThreeRoutingModule],
})
export class BasicOperationsMultiplicationStageThreeModule {}
