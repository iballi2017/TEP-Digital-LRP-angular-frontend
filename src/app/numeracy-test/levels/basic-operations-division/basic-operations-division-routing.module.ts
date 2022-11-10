import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsDivisionStageFiveComponent } from './stages/basic-operations-division-stage-five/basic-operations-division-stage-five.component';
import { BasicOperationsDivisionStageFourComponent } from './stages/basic-operations-division-stage-four/basic-operations-division-stage-four.component';
import { BasicOperationsDivisionStageOneComponent } from './stages/basic-operations-division-stage-one/basic-operations-division-stage-one.component';
import { BasicOperationsDivisionStageThreeComponent } from './stages/basic-operations-division-stage-three/basic-operations-division-stage-three.component';
import { BasicOperationsDivisionStageTwoComponent } from './stages/basic-operations-division-stage-two/basic-operations-division-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.ONE}`,
    component: BasicOperationsDivisionStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-one/basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageOneSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-one/basic-operations-division-stage-one-splash/basic-operations-division-stage-one-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.TWO}`,
    component: BasicOperationsDivisionStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-two/basic-operations-division-stage-two-splash/basic-operations-division-stage-two-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageTwoSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-two/basic-operations-division-stage-two-splash/basic-operations-division-stage-two-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.THREE}`,
    component: BasicOperationsDivisionStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-three/basic-operations-division-stage-three-splash/basic-operations-division-stage-three-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageThreeSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-three/basic-operations-division-stage-three-splash/basic-operations-division-stage-three-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-three/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.FOUR}`,
    component: BasicOperationsDivisionStageFourComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-four/basic-operations-division-stage-four-splash/basic-operations-division-stage-four-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageFourSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            // './stages/basic-operations-division-stage-four/basic-operations-division-stage-four-splash/basic-operations-division-stage-four-splash.module'
            './stages/basic-operations-division-stage-four/basic-operations-division-stage-four-splash/basic-operations-division-stage-four-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageFourSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-four/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_DIVISION}/stage-${GameStage.FIVE}`,
    component: BasicOperationsDivisionStageFiveComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            // './stages/basic-operations-division-stage-four/basic-operations-division-stage-four-splash/basic-operations-division-stage-four-splash.module'
            // './stages/basic-operations-division-stage-five/basic-operations-division-stage-five-splash/basic-operations-division-stage-five-splash.module'
            './stages/basic-operations-division-stage-five/basic-operations-division-stage-five-splash/basic-operations-division-stage-five-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageFiveSplashModule),
      },
      {
        path: 'number-recognition-one-splash',
        loadChildren: () =>
          import(
            // './stages/basic-operations-division-stage-five/basic-operations-division-stage-five-splash/basic-operations-division-stage-five-splash.module'
            './stages/basic-operations-division-stage-five/basic-operations-division-stage-five-splash/basic-operations-division-stage-five-splash.module'
          ).then((m) => m.BasicOperationsDivisionStageFiveSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-division-stage-five/activity/activity.module'
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
