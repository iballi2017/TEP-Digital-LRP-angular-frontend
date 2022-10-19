import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsSubtractionStageFourComponent } from './stages/basic-operations-subtraction-stage-four/basic-operations-subtraction-stage-four.component';
import { BasicOperationsSubtractionStageOneComponent } from './stages/basic-operations-subtraction-stage-one/basic-operations-subtraction-stage-one.component';
import { BasicOperationsSubtractionStageThreeComponent } from './stages/basic-operations-subtraction-stage-three/basic-operations-subtraction-stage-three.component';
import { BasicOperationsSubtractionStageTwoComponent } from './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two.component';

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
  {
    path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.TWO}`,
    component: BasicOperationsSubtractionStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two-splash/basic-operations-subtraction-stage-two-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageTwoSplashModule),
      },
      {
        path: 'number-recognition-two-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-two/basic-operations-subtraction-stage-two-splash/basic-operations-subtraction-stage-two-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.THREE}`,
    component: BasicOperationsSubtractionStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-three/basic-operations-subtraction-stage-three-splash/basic-operations-subtraction-stage-three-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageThreeSplashModule),
      },
      {
        path: 'number-recognition-three-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-three/basic-operations-subtraction-stage-three-splash/basic-operations-subtraction-stage-three-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-three/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_SUBTRACTION}/stage-${GameStage.FOUR}`,
    component: BasicOperationsSubtractionStageFourComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-four/basic-operations-subtraction-stage-four-splash/basic-operations-subtraction-stage-four-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageFourSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-four/basic-operations-subtraction-stage-four-splash/basic-operations-subtraction-stage-four-splash.module'
          ).then((m) => m.BasicOperationsSubtractionStageFourSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-subtraction-stage-four/activity/activity.module'
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
