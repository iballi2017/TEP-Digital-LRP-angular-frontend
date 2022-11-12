import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordStageOneRoutingModule } from './word-stage-one-routing.module';
import { WordStageOneSplashComponent } from './word-stage-one-splash/word-stage-one-splash.component';


@NgModule({
  declarations: [
    WordStageOneSplashComponent
  ],
  imports: [
    CommonModule,
    WordStageOneRoutingModule
  ]
})
export class WordStageOneModule { }
