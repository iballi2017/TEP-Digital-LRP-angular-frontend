import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageThreeRoutingModule } from './lettering-stage-three-routing.module';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity/lettering-stage-three-activity.component';
import { ExerciseComponent } from './lettering-stage-three-activity/exercise/exercise.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LetteringStageThreeActivityComponent,
    ExerciseComponent
  ],
  imports: [
    CommonModule,
    LetteringStageThreeRoutingModule,
    SharedModule
  ]
})
export class LetteringStageThreeModule { }
