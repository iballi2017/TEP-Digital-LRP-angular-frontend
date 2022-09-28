import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParagraphRoutingModule } from './paragraph-routing.module';
import { StagesComponent } from './stages/stages.component';
import { ParagraphStageOneComponent } from './stages/paragraph-stage-one/paragraph-stage-one.component';
import { ParagraphStageTwoComponent } from './stages/paragraph-stage-two/paragraph-stage-two.component';


@NgModule({
  declarations: [
    StagesComponent,
    ParagraphStageOneComponent,
    ParagraphStageTwoComponent
  ],
  imports: [
    CommonModule,
    ParagraphRoutingModule
  ]
})
export class ParagraphModule { }
