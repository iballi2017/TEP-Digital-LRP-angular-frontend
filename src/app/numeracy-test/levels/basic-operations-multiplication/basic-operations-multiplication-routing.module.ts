import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsMultiplicationStageOneComponent } from './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/stage-${GameStage.ONE}`,
    component: BasicOperationsMultiplicationStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one-splash/basic-operations-multiplication-stage-one-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageOneSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one-splash/basic-operations-multiplication-stage-one-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsMultiplicationRoutingModule {}
