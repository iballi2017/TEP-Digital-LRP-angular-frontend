import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsDivisionStageFiveRoutingModule } from './basic-operations-division-stage-five-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsDivisionStageFiveSplashComponent } from './basic-operations-division-stage-five-splash/basic-operations-division-stage-five-splash.component';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsDivisionStageFiveSplashComponent,
  ],
  imports: [CommonModule, BasicOperationsDivisionStageFiveRoutingModule],
})
export class BasicOperationsDivisionStageFiveModule {}
