import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageTwoSplashRoutingModule } from './lettering-stage-two-splash-routing.module';
import { SecondScreenConsonantSplashComponent } from './second-screen-consonant-splash/second-screen-consonant-splash.component';
import { FirstScreenConsonantSplashComponent } from './first-screen-consonant-splash/first-screen-consonant-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LetteringStageTwoSplashComponent } from './lettering-stage-two-splash.component';
import { ThirdScreenConsonantSplashComponent } from './third-screen-consonant-splash/third-screen-consonant-splash.component';
import { FourthScreenConsonantSplashComponent } from './fourth-screen-consonant-splash/fourth-screen-consonant-splash.component';
import { FifthScreenConsonantSplashComponent } from './fifth-screen-consonant-splash/fifth-screen-consonant-splash.component';
import { InstructionalVidLetteringStageTwoComponent } from './instructional-vid-lettering-stage-two/instructional-vid-lettering-stage-two.component';


@NgModule({
  declarations: [
    LetteringStageTwoSplashComponent,
    SecondScreenConsonantSplashComponent,
    FirstScreenConsonantSplashComponent,
    ThirdScreenConsonantSplashComponent,
    FourthScreenConsonantSplashComponent,
    FifthScreenConsonantSplashComponent,
    InstructionalVidLetteringStageTwoComponent
  ],
  imports: [
    CommonModule,
    LetteringStageTwoSplashRoutingModule,
    SharedModule
  ]
})
export class LetteringStageTwoSplashModule { }
