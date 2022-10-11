import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceValueStageOneSplashRoutingModule } from './place-value-stage-one-splash-routing.module';
import { PlaceValueStageOneInstructionalVideoComponent } from './place-value-stage-one-instructional-video/place-value-stage-one-instructional-video.component';
import { PlaceValueStageOneSplashComponent } from './place-value-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PlaceValueStageOneInstructionalVideoComponent,
    PlaceValueStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    PlaceValueStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class PlaceValueStageOneSplashModule { }
