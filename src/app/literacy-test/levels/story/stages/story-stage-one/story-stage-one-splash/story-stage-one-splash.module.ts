import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryStageOneSplashRoutingModule } from './story-stage-one-splash-routing.module';
import { StoryStageOneInstructionalVideoComponent } from './story-stage-one-instructional-video/story-stage-one-instructional-video.component';
import { StoryStageOneSplashComponent } from './story-stage-one-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StoryStageOneInstructionalVideoComponent,
    StoryStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    StoryStageOneSplashRoutingModule,
    SharedModule
  ]
})
export class StoryStageOneSplashModule { }
