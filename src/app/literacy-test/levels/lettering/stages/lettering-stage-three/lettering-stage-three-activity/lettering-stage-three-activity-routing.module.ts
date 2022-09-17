import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringStageThreeActivityComponent,
    children: [
      { path: '', component: ExerciseComponent },
      { path: 'exercise', component: ExerciseComponent },
      { path: 'exercise-two', component: ExerciseTwoComponent },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetteringStageThreeActivityRoutingModule { }
