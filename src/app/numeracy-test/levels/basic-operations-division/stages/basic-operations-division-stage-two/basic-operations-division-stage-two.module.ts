import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageTwoRoutingModule } from './basic-operations-division-stage-two-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsDivisionStageTwoSplashComponent } from './basic-operations-division-stage-two-splash/basic-operations-division-stage-two-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsDivisionStageTwoSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsDivisionStageTwoRoutingModule],
})
export class BasicOperationsDivisionStageTwoModule {}
