import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageThreeActivityRoutingModule } from './lettering-stage-three-activity-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';


@NgModule({
  declarations: [LetteringStageThreeActivityComponent, ExerciseOneComponent, ExerciseTwoComponent],
  imports: [
    CommonModule,
    LetteringStageThreeActivityRoutingModule,
    SharedModule,
    FormsModule,
  ]
})
export class LetteringStageThreeActivityModule { }
