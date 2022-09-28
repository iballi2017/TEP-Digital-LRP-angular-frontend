import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphStageOneRoutingModule } from './paragraph-stage-one-routing.module';
import { ParagraphStageOneSplashComponent } from './paragraph-stage-one-splash/paragraph-stage-one-splash.component';


@NgModule({
  declarations: [
    ParagraphStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    ParagraphStageOneRoutingModule
  ]
})
export class ParagraphStageOneModule { }
