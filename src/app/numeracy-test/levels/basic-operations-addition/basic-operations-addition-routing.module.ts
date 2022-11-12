import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { BasicOperationsAdditionStageFourComponent } from './stages/basic-operations-addition-stage-four/basic-operations-addition-stage-four.component';
import { BasicOperationsAdditionStageOneComponent } from './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one.component';
import { BasicOperationsAdditionStageThreeComponent } from './stages/basic-operations-addition-stage-three/basic-operations-addition-stage-three.component';
import { BasicOperationsAdditionStageTwoComponent } from './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.BASIC_OPERATIONS_ADDITION}/stage-${GameStage.ONE}`,
    component: BasicOperationsAdditionStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one-splash/basic-operations-addition-stage-one-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageOneSplashModule),
      },
      {
        path: 'basic-operations-addition-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/basic-operations-addition-stage-one-splash/basic-operations-addition-stage-one-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-one/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_ADDITION}/stage-${GameStage.TWO}`,
    component: BasicOperationsAdditionStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two-splash/basic-operations-addition-stage-two-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageTwoSplashModule),
      },
      {
        path: 'basic-operations-addition-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-two/basic-operations-addition-stage-two-splash/basic-operations-addition-stage-two-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-two/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_ADDITION}/stage-${GameStage.THREE}`,
    component: BasicOperationsAdditionStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-three/basic-operations-addition-stage-three-splash/basic-operations-addition-stage-three-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageThreeSplashModule),
      },
      {
        path: 'basic-operations-addition-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-three/basic-operations-addition-stage-three-splash/basic-operations-addition-stage-three-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-three/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.BASIC_OPERATIONS_ADDITION}/stage-${GameStage.FOUR}`,
    component: BasicOperationsAdditionStageFourComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-four/basic-operations-addition-stage-four-splash/basic-operations-addition-stage-four-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageFourSplashModule),
      },
      {
        path: 'basic-operations-addition-splash',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-four/basic-operations-addition-stage-four-splash/basic-operations-addition-stage-four-splash.module'
          ).then((m) => m.BasicOperationsAdditionStageFourSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/basic-operations-addition-stage-four/activity/activity.module'
          ).then((m) => m.ActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsAdditionRoutingModule {}
