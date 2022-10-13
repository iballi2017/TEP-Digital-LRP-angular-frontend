import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageOneRoutingModule } from './basic-operations-division-stage-one-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsDivisionStageOneSplashComponent } from './basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsDivisionStageOneSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsDivisionStageOneRoutingModule],
})
export class BasicOperationsDivisionStageOneModule {}
