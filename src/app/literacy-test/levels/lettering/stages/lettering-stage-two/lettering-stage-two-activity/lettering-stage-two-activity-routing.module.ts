import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseComponent } from './exercise/exercise.component';
import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringStageTwoActivityComponent,
    children: [
      { path: '', component: ExerciseComponent },
      { path: 'exercise', component: ExerciseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringStageTwoActivityRoutingModule {}
