import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsMultiplicationStageFourComponent } from './stages/basic-operations-multiplication-stage-Four/basic-operations-multiplication-stage-four.component';
import { BasicOperationsMultiplicationStageOneComponent } from './stages/basic-operations-multiplication-stage-one/basic-operations-multiplication-stage-one.component';
import { BasicOperationsMultiplicationStageThreeComponent } from './stages/basic-operations-multiplication-stage-three/basic-operations-multiplication-stage-three.component';
import { BasicOperationsMultiplicationStageTwoComponent } from './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two.component';

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
  {
    path: `${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/stage-${GameStage.TWO}`,
    component: BasicOperationsMultiplicationStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two-splash/basic-operations-multiplication-stage-two-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageTwoSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-two/basic-operations-multiplication-stage-two-splash/basic-operations-multiplication-stage-two-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/stage-${GameStage.THREE}`,
    component: BasicOperationsMultiplicationStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-three/basic-operations-multiplication-stage-three-splash/basic-operations-multiplication-stage-three-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageThreeSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-three/basic-operations-multiplication-stage-three-splash/basic-operations-multiplication-stage-three-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-multiplication-stage-three/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_MULTIPLICATION}/stage-${GameStage.FOUR}`,
    component: BasicOperationsMultiplicationStageFourComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            // './stages/basic-operations-multiplication-stage-four/basic-operations-multiplication-stage-four-splash/basic-operations-multiplication-stage-four-splash.module'
            './stages/basic-operations-multiplication-stage-Four/basic-operations-multiplication-stage-four-splash/basic-operations-multiplication-stage-four-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageFourSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            // './stages/basic-operations-multiplication-stage-four/basic-operations-multiplication-stage-four-splash/basic-operations-multiplication-stage-four-splash.module'
            './stages/basic-operations-multiplication-stage-Four/basic-operations-multiplication-stage-four-splash/basic-operations-multiplication-stage-four-splash.module'
          ).then((m) => m.BasicOperationsMultiplicationStageFourSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            // './stages/basic-operations-multiplication-stage-four/activity/activity.module'
            './stages/basic-operations-multiplication-stage-Four/activity/activity.module'
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
