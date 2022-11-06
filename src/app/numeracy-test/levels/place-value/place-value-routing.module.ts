import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { PlaceValueStageOneComponent } from './stages/place-value-stage-one/place-value-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.PLACE_VALUE}/stage-${GameStage.ONE}`,
    component: PlaceValueStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/place-value-stage-one/place-value-stage-one-splash/place-value-stage-one-splash.module'
          ).then((m) => m.PlaceValueStageOneSplashModule),
      },
      {
<<<<<<< HEAD
        path: 'place-value-stage-one-splash',
=======
        path: 'number-recognition-one-splash',
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4
        loadChildren: () =>
          import(
            './stages/place-value-stage-one/place-value-stage-one-splash/place-value-stage-one-splash.module'
          ).then((m) => m.PlaceValueStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/place-value-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceValueRoutingModule {}
