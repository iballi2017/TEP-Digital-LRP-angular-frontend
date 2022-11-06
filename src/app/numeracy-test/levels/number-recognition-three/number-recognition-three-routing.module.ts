import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { NumberRecognitionThreeStageOneComponent } from './stages/number-recognition-three-stage-one/number-recognition-three-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.NUMBER_RECOGNITION_THREE}/stage-${GameStage.ONE}`,
    component: NumberRecognitionThreeStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            // './stages/number-recognition-stage-one/number-recognition-stage-one-splash/number-recognition-stage-one-splash.module'
            // './stages/number-recognition-three-stage-one/number-recognition-three-stage-one-splash/number-recognition-three-stage-one-splash.module'
            './stages/number-recognition-three-stage-one/number-recognition-three-stage-one-splash/number-recognition-three-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionThreeStageOneSplashModule),
      },
      {
<<<<<<< HEAD
        path: 'number-recognition-three-stage-one-splash',
=======
        path: 'number-recognition-one-splash',
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4
        loadChildren: () =>
          import(
            './stages/number-recognition-three-stage-one/number-recognition-three-stage-one-splash/number-recognition-three-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionThreeStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/number-recognition-three-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NumberRecognitionThreeRoutingModule { }
