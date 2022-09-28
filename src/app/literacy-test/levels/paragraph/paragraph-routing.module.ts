import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParagraphStageOneComponent } from './stages/paragraph-stage-one/paragraph-stage-one.component';

const routes: Routes = [
  {
    path: 'paragraph/stage-1',
    component: ParagraphStageOneComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          // import(
          //   './stages/paragraph-stage-one/paragraph-splash/paragraph-stage-one-splash.module'
          // ).then((m) => m.paragraphStageOneSplashModule),
          import(
            './stages/paragraph-stage-one/paragraph-stage-one-splash/paragraph-stage-one-splash.module'
          ).then((m) => m.ParagraphStageOneSplashModule),
      },
      {
        path: 'paragraph-stage-one-splash',
        loadChildren: () =>
          import(
            './stages/paragraph-stage-one/paragraph-stage-one-splash/paragraph-stage-one-splash.module'
          ).then((m) => m.ParagraphStageOneSplashModule),
      },
      {
        path: 'activity',
        loadChildren: () =>
          import('./stages/paragraph-stage-one/activity/activity.module').then(
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
export class ParagraphRoutingModule {}
