import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageThreeRoutingModule } from './basic-operations-division-stage-three-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsDivisionStageThreeSplashComponent } from './basic-operations-division-stage-three-splash/basic-operations-division-stage-three-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsDivisionStageThreeSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsDivisionStageThreeRoutingModule],
})
export class BasicOperationsDivisionStageTwoModule {}
