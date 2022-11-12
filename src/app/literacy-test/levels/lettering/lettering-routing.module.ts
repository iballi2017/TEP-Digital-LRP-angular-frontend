import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { LetteringStageOneComponent } from './stages/lettering-stage-one/lettering-stage-one.component';
import { LetteringStageThreeComponent } from './stages/lettering-stage-three/lettering-stage-three.component';
import { LetteringStageTwoComponent } from './stages/lettering-stage-two/lettering-stage-two.component';

const routes: Routes = [
  // {
  //   path: `${GameLevel.LETTER}/stage-${GameStage.ONE}`,
  //   component: LetteringStageOneComponent,
  //   children: [
  //     {
  //       path: 'lettering-splash',
  //       loadChildren: () =>
  //         import(
  //           './stages/lettering-stage-one/lettering-splash/lettering-splash.module'
  //         ).then((m) => m.LetteringSplashModule),
  //     },
  //     {
  //       path: 'activity',
  //       loadChildren: () =>
  //         import('./stages/lettering-stage-one/activity/activity.module').then(
  //           (m) => m.ActivityModule
  //         ),
  //     },
  //   ],
  // },
  // {
  //   path: `${GameLevel.LETTER}/stage-${GameStage.TWO}`,
  //   component: LetteringStageTwoComponent,
  //   children: [
  //     {
  //       path: 'lettering-splash',
  //       loadChildren: () =>
  //         import(
  //           './stages/lettering-stage-two/lettering-stage-two-splash/lettering-stage-two-splash.module'
  //         ).then((m) => m.LetteringStageTwoSplashModule),
  //     },
  //     {
  //       path: 'activity',
  //       loadChildren: () =>
  //         import(
  //           './stages/lettering-stage-two/lettering-stage-two-activity/lettering-stage-two-activity.module'
  //         ).then((m) => m.LetteringStageTwoActivityModule),
  //     },
  //   ],
  // },
  // {
  //   path: `${GameLevel.LETTER}/stage-${GameStage.THREE}`,
  //   component: LetteringStageThreeComponent,
  //   children: [
  //     {
  //       path: 'lettering-splash',
  //       loadChildren: () =>
  //         import(
  //           './stages/lettering-stage-three/lettering-stage-three-splash/lettering-stage-three-splash.module'
  //         ).then((m) => m.LetteringStageThreeSplashModule),
  //     },
  //     {
  //       path: 'activity',
  //       loadChildren: () =>
  //         import(
  //           './stages/lettering-stage-three/lettering-stage-three-activity/lettering-stage-three-activity.module'
  //         ).then((m) => m.LetteringStageThreeActivityModule),
  //     },
  //   ],
  // },
  
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.ONE}`,
    component: LetteringStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/lettering-stage-one-splash/lettering-stage-one-splash.module'
          ).then((m) => m.LetteringStageOneSplashModule),
      },
      {
        path: 'lettering-splash',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/lettering-stage-one-splash/lettering-stage-one-splash.module'
          ).then((m) => m.LetteringStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/lettering-stage-one/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.TWO}`,
    component: LetteringStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/lettering-stage-two/lettering-stage-two-splash/lettering-stage-two-splash.module'
          ).then((m) => m.LetteringStageTwoSplashModule),
      },
      {
        path: 'lettering-splash',
        loadChildren: () =>
          import(
            './stages/lettering-stage-two/lettering-stage-two-splash/lettering-stage-two-splash.module'
          ).then((m) => m.LetteringStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/lettering-stage-two/lettering-stage-two-activity/lettering-stage-two-activity.module'
          ).then((m) => m.LetteringStageTwoActivityModule),
      },
    ],
  },
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.THREE}`,
    component: LetteringStageThreeComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/lettering-stage-three/lettering-stage-three-splash/lettering-stage-three-splash.module'
          ).then((m) => m.LetteringStageThreeSplashModule),
      },
      {
        path: 'lettering-splash',
        loadChildren: () =>
          import(
            './stages/lettering-stage-three/lettering-stage-three-splash/lettering-stage-three-splash.module'
          ).then((m) => m.LetteringStageThreeSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import(
            './stages/lettering-stage-three/lettering-stage-three-activity/lettering-stage-three-activity.module'
          ).then((m) => m.LetteringStageThreeActivityModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringRoutingModule {}
