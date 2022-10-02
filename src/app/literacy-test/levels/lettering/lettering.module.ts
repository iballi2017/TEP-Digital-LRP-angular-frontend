import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetteringRoutingModule } from './lettering-routing.module';
import { LetteringStageOneComponent } from './stages/lettering-stage-one/lettering-stage-one.component';
import { LetteringStageTwoComponent } from './stages/lettering-stage-two/lettering-stage-two.component';
import { LetteringStageThreeComponent } from './stages/lettering-stage-three/lettering-stage-three.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LetteringStageOneComponent,
    LetteringStageTwoComponent,
    LetteringStageThreeComponent,
  ],
  imports: [CommonModule, LetteringRoutingModule, SharedModule],
})
export class LetteringModule {}
