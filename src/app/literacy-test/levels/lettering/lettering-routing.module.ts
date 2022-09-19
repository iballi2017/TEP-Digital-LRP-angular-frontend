import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';
import { LetteringStageCompletionComponent } from './lettering-stage-completion/lettering-stage-completion.component';
import { LetteringStageFourComponent } from './stages/lettering-stage-four/lettering-stage-four.component';
import { FifthScreenComponent } from './stages/lettering-stage-one/lettering-splash/fifth-screen/fifth-screen.component';
import { FirstScreenComponent } from './stages/lettering-stage-one/lettering-splash/first-screen/first-screen.component';
import { FourthScreenComponent } from './stages/lettering-stage-one/lettering-splash/fourth-screen/fourth-screen.component';
import { LetteringSplashComponent } from './stages/lettering-stage-one/lettering-splash/lettering-splash.component';
import { SecondScreenComponent } from './stages/lettering-stage-one/lettering-splash/second-screen/second-screen.component';
import { SixthScreenComponent } from './stages/lettering-stage-one/lettering-splash/sixth-screen/sixth-screen.component';
import { ThirdScreenComponent } from './stages/lettering-stage-one/lettering-splash/third-screen/third-screen.component';
import { LetteringStageOneComponent } from './stages/lettering-stage-one/lettering-stage-one.component';
import { LetteringStageThreeComponent } from './stages/lettering-stage-three/lettering-stage-three.component';
import { FirstScreenConsonantSplashComponent } from './stages/lettering-stage-two/lettering-stage-two-splash/first-screen-consonant-splash/first-screen-consonant-splash.component';
import { LetteringStageTwoComponent } from './stages/lettering-stage-two/lettering-stage-two.component';

const routes: Routes = [
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.ONE}`,
    component: LetteringStageOneComponent,
    children: [
      // {
      //   path: '',
      //   component: FirstScreenComponent,
      // },
      // {
      //   path: 'first-screen',
      //   component: FirstScreenComponent,
      // },
      // {
      //   path: 'sixth-screen',
      //   component: SixthScreenComponent,
      // },
      {
        path: 'lettering-splash',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/lettering-splash/lettering-splash.module'
          ).then((m) => m.LetteringSplashModule),
      },
      {
        path: 'spelling-vowel-letters',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/spelling-vowel-letters/spelling-vowel-letters.module'
          ).then((m) => m.SpellingVowelLettersModule),
      },
      {
        path: 'pronunciation',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/pronunciation/pronunciation.module'
          ).then((m) => m.PronunciationModule),
      },

      {
        path: 'lettering-splash-screen-two',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/lettering-splash-two/lettering-splash-two.module'
          ).then((m) => m.LetteringSplashTwoModule),
      },
      {
        path: 'identify-vowel-letters',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/identify-vowel-letters/identify-vowel-letters.module'
          ).then((m) => m.IdentifyVowelLettersModule),
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
  // {
  //   path: 'stage-1',
  //   loadChildren: () =>
  //     import('./stages/lettering-stage-one/lettering-stage-one.module').then(
  //       (m) => m.LetteringStageOneModule
  //     ),
  // },
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.TWO}`,
    component: LetteringStageTwoComponent,
    children: [
      {
        path: 'lettering-splash',
        loadChildren: () =>
          import(
            './stages/lettering-stage-two/lettering-stage-two-splash/lettering-stage-two-splash.module'
          ).then((m) => m.LetteringStageTwoSplashModule),
      },
      {
        path: 'pronunciation',
        loadChildren: () =>
          import(
            './stages/lettering-stage-two/lettering-stage-two-pronunciation/lettering-stage-two-pronunciation.module'
          ).then((m) => m.LetteringStageTwoPronunciationModule),
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
  {
    path: `${GameLevel.LETTER}/stage-${GameStage.THREE}`,
    component: LetteringStageFourComponent,
  },
  {
    path: 'stage-completion/:game-level/:stage-number',
    component: LetteringStageCompletionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringRoutingModule {}
