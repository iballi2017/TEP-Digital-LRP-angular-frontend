import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringRoutingModule } from './lettering-routing.module';
import { LetteringStageOneComponent } from './stages/lettering-stage-one/lettering-stage-one.component';
import { LetteringStageTwoComponent } from './stages/lettering-stage-two/lettering-stage-two.component';
import { LetteringStageThreeComponent } from './stages/lettering-stage-three/lettering-stage-three.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FirstScreenComponent } from './stages/lettering-stage-one/lettering-splash/first-screen/first-screen.component';
import { SecondScreenComponent } from './stages/lettering-stage-one/lettering-splash/second-screen/second-screen.component';
import { ThirdScreenComponent } from './stages/lettering-stage-one/lettering-splash/third-screen/third-screen.component';
import { LetteringSplashModule } from './stages/lettering-stage-one/lettering-splash/lettering-splash.module';
import { SixthScreenComponent } from './stages/lettering-stage-one/lettering-splash/sixth-screen/sixth-screen.component';
import { FifthScreenComponent } from './stages/lettering-stage-one/lettering-splash/fifth-screen/fifth-screen.component';
import { FourthScreenComponent } from './stages/lettering-stage-one/lettering-splash/fourth-screen/fourth-screen.component';
import { LetteringStageCompletionComponent } from './lettering-stage-completion/lettering-stage-completion.component';

@NgModule({
  declarations: [
    LetteringStageOneComponent,
    LetteringStageTwoComponent,
    LetteringStageThreeComponent,
    LetteringStageCompletionComponent,
    // 
    // FirstScreenComponent,
    // SecondScreenComponent,
    // ThirdScreenComponent,
    // FourthScreenComponent,
    // FifthScreenComponent,
    // SixthScreenComponent
  ],
  imports: [CommonModule, LetteringRoutingModule, SharedModule],
})
export class LetteringModule {}
