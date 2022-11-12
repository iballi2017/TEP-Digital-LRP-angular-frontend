import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WordStageFourSplashRoutingModule } from './word-stage-four-splash-routing.module';
import { WordStageFourInstructionalVideoComponent } from './word-stage-four-instructional-video/word-stage-four-instructional-video.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WordStageFourSplashComponent } from './word-stage-four-splash.component';


@NgModule({
  declarations: [
    WordStageFourSplashComponent,
    WordStageFourInstructionalVideoComponent
  ],
  imports: [
    CommonModule,
    WordStageFourSplashRoutingModule,
    SharedModule
  ]
})
export class WordStageFourSplashModule { }
