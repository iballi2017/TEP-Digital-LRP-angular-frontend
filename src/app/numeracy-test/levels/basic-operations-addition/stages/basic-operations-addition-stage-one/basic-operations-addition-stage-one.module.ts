import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicOperationsAdditionStageOneRoutingModule } from './basic-operations-addition-stage-one-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { BasicOperationsAdditionStageOneSplashComponent } from './basic-operations-addition-stage-one-splash/basic-operations-addition-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ActivityComponent,
    BasicOperationsAdditionStageOneSplashComponent,
  ],
  imports: [
    CommonModule,
    BasicOperationsAdditionStageOneRoutingModule,
    SharedModule,
  ],
})
export class BasicOperationsAdditionStageOneModule {}
