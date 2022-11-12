import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceValueStageOneRoutingModule } from './place-value-stage-one-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { PlaceValueStageOneSplashComponent } from './place-value-stage-one-splash/place-value-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { PlaceValueStageOneComponent } from './place-value-stage-one.component';


@NgModule({
  declarations: [
    // PlaceValueStageOneComponent
    ActivityComponent,
    PlaceValueStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    PlaceValueStageOneRoutingModule,
    SharedModule,
  ]
})
export class PlaceValueStageOneModule { }
