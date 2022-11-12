import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphStageOneSplashRoutingModule } from './paragraph-stage-one-splash-routing.module';
import { ParagraphStageOneInstructionalVideoComponent } from './paragraph-stage-one-instructional-video/paragraph-stage-one-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParagraphStageOneSplashComponent } from './paragraph-stage-one-splash.component';


@NgModule({
  declarations: [
    ParagraphStageOneInstructionalVideoComponent,
    ParagraphStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    ParagraphStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class ParagraphStageOneSplashModule { }
