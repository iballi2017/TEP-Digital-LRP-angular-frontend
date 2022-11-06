import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { NumberRecognitionTwoStageOneComponent } from './stages/number-recognition-two-stage-one/number-recognition-two-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.NUMBER_RECOGNITION_TWO}/stage-${GameStage.ONE}`,
    component: NumberRecognitionTwoStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/number-recognition-two-stage-one/number-recognition-two-stage-one-splash/number-recognition-two-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionTwoStageOneSplashModule),
      },
      {
<<<<<<< HEAD
        path: 'number-recognition-two-stage-one-splash',
=======
        path: 'number-recognition-one-splash',
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4
        loadChildren: () =>
          import(
            './stages/number-recognition-two-stage-one/number-recognition-two-stage-one-splash/number-recognition-two-stage-one-splash.module'
          ).then((m) => m.NumberRecognitionTwoStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/number-recognition-two-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumberRecognitionTwoRoutingModule {}
