import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsDivisionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-division-stage-one.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.ONE}`,
    component: BasicOperationsDivisionStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-one/basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageOneSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-one/basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageOneSplashModule),
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
export class BasicOperationsDivisionRoutingModule {}
