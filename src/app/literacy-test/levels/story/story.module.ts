import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryRoutingModule } from './story-routing.module';
import { StagesComponent } from './stages/stages.component';
import { StoryStageOneComponent } from './stages/story-stage-one/story-stage-one.component';


@NgModule({
  declarations: [
    StagesComponent,
    StoryStageOneComponent
  ],
  imports: [
    CommonModule,
    StoryRoutingModule
  ]
})
export class StoryModule { }
