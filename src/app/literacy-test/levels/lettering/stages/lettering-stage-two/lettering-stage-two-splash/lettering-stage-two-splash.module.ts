import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageTwoSplashRoutingModule } from './lettering-stage-two-splash-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LetteringStageTwoSplashComponent } from './lettering-stage-two-splash.component';
import { InstructionalVidLetteringStageTwoComponent } from './instructional-vid-lettering-stage-two/instructional-vid-lettering-stage-two.component';


@NgModule({
  declarations: [
    LetteringStageTwoSplashComponent,
    InstructionalVidLetteringStageTwoComponent
  ],
  imports: [
    CommonModule,
    LetteringStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class LetteringStageTwoSplashModule { }
