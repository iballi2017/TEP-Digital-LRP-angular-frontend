import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphStageTwoRoutingModule } from './paragraph-stage-two-routing.module';
import { ParagraphStageTwoSplashComponent } from './paragraph-stage-two-splash/paragraph-stage-two-splash.component';


@NgModule({
  declarations: [
    ParagraphStageTwoSplashComponent
  ],
  imports: [
    CommonModule,
    ParagraphStageTwoRoutingModule
  ]
})
export class ParagraphStageTwoModule { }
