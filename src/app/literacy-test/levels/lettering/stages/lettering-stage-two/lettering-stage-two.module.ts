import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageTwoRoutingModule } from './lettering-stage-two-routing.module';
import { LetteringStageTwoSplashComponent } from './lettering-stage-two-splash/lettering-stage-two-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LetteringStageTwoSplashComponent,
  ],
  imports: [
    CommonModule,
    LetteringStageTwoRoutingModule,
    SharedModule
  ]
})
export class LetteringStageTwoModule { }
