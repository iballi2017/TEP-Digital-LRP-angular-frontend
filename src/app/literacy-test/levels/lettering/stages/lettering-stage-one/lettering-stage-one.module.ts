import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageOneRoutingModule } from './lettering-stage-one-routing.module';
import { LiteracyTestModule } from 'src/app/literacy-test/literacy-test.module';
import { LetteringStageOneSplashComponent } from './lettering-stage-one-splash/lettering-stage-one-splash.component';

@NgModule({
  declarations: [LetteringStageOneSplashComponent],
  imports: [
    CommonModule,
    LetteringStageOneRoutingModule,
    LiteracyTestModule,
  ],
})
export class LetteringStageOneModule {}
