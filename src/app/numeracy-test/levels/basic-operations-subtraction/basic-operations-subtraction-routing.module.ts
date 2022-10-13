import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.ONE}`,
    component: BasicOperationsSubtractionStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one-splash/basic-operations-subtraction-stage-one-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageOneSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one-splash/basic-operations-subtraction-stage-one-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsSubtractionRoutingModule {}
