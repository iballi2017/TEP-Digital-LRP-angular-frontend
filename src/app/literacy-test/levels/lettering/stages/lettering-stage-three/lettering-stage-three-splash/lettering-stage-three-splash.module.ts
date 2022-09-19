import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageThreeSplashRoutingModule } from './lettering-stage-three-splash-routing.module';
import { LetteringStageThreeSplashComponent } from './lettering-stage-three-splash.component';
import { InstructionalVidLetteringStageThreeComponent } from './instructional-vid-lettering-stage-three/instructional-vid-lettering-stage-three.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LetteringStageThreeSplashComponent,
    InstructionalVidLetteringStageThreeComponent
  ],
  imports: [
    CommonModule,
    LetteringStageThreeSplashRoutingModule,
    SharedModule
  ]
})
export class LetteringStageThreeSplashModule { }
