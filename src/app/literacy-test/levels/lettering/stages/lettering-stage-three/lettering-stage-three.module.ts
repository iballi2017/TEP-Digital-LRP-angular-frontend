import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageThreeRoutingModule } from './lettering-stage-three-routing.module';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity/lettering-stage-three-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { ExerciseOneComponent } from './lettering-stage-three-activity/exercise-one/exercise-one.component';


@NgModule({
  declarations: [
    LetteringStageThreeActivityComponent,
    // ExerciseOneComponent
  ],
  imports: [
    CommonModule,
    LetteringStageThreeRoutingModule,
    SharedModule
  ]
})
export class LetteringStageThreeModule { }
