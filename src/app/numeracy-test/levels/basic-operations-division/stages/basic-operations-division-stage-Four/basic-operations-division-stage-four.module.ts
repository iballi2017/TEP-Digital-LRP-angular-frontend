import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageFourRoutingModule } from './basic-operations-division-stage-four-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsDivisionStageFourSplashComponent } from './basic-operations-division-stage-four-splash/basic-operations-division-stage-four-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsDivisionStageFourSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsDivisionStageFourRoutingModule],
})
export class BasicOperationsDivisionStageFourModule {}
