import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WordStageSplashRoutingModule } from './word-stage-splash-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WordStageSplashRoutingModule,
    SharedModule
  ]
})
export class WordStageSplashModule { }
