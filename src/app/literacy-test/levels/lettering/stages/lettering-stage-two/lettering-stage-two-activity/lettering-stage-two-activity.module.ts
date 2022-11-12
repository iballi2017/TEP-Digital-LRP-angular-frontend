import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringStageTwoActivityRoutingModule } from './lettering-stage-two-activity-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ExerciseComponent, LetteringStageTwoActivityComponent],
  imports: [
    CommonModule,
    LetteringStageTwoActivityRoutingModule,
    SharedModule,
    FormsModule,
  ],
})
export class LetteringStageTwoActivityModule {}
