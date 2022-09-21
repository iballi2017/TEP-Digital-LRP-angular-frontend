import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordStageOneComponent } from './stages/word-stage-one/word-stage-one.component';
import { WordStageTwoComponent } from './stages/word-stage-two/word-stage-two.component';

const routes: Routes = [
  {
    path: 'word/stage-1',
    component: WordStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          // import(
          //   './stages/word-stage-one/word-splash/word-stage-one-splash.module'
          // ).then((m) => m.WordStageOneSplashModule),
          import(
            './stages/word-stage-one/word-stage-one-splash/word-stage-one-splash.module'
          ).then((m) => m.WordStageOneSplashModule),
      },
      {
        path: 'word-stage-one-splash',
        loadChildren: () =>
          import(
            './stages/word-stage-one/word-stage-one-splash/word-stage-one-splash.module'
          ).then((m) => m.WordStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/word-stage-one/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
  {
    path: 'word/stage-2',
    component: WordStageTwoComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './stages/word-stage-two/word-stage-two-splash/word-stage-two-splash.module'
          ).then((m) => m.WordStageTwoSplashModule),
      },
      {
        path: 'word-stage-one-splash',
        loadChildren: () =>
          import(
            './stages/word-stage-two/word-stage-two-splash/word-stage-two-splash.module'
          ).then((m) => m.WordStageTwoSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/word-stage-two/activity/activity.module').then(
            (m) => m.ActivityModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordRoutingModule {}
