import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageOneRoutingModule } from './lettering-stage-one-routing.module';
import { LetteringSplashComponent } from './lettering-splash/lettering-splash.component';
import { LiteracyTestModule } from 'src/app/literacy-test/literacy-test.module';

@NgModule({
  declarations: [LetteringSplashComponent],
  imports: [
    CommonModule,
    LetteringStageOneRoutingModule,
    LiteracyTestModule,
  ],
})
export class LetteringStageOneModule {}
