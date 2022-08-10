import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { LetteringStageTwoComponent } from './stages/lettering-stage-two/lettering-stage-two.component';

const routes: Routes = [
  {
    path: 'stage-1',
    component: LetteringStageOneComponent,
    children: [
      {
        path: '',
        component: FirstScreenComponent,
      },
      {
        path: 'first-screen',
        component: FirstScreenComponent,
      },
      // {
      //   path: 'second-screen',
      //   component: SecondScreenComponent,
      // },
      // {
      //   path: 'third-screen',
      //   component: ThirdScreenComponent,
      // },
      // {
      //   path: 'fourth-screen',
      //   component: FourthScreenComponent,
      // },
      // {
      //   path: 'fifth-screen',
      //   component: FifthScreenComponent,
      // },
      {
        path: 'sixth-screen',
        component: SixthScreenComponent,
      },

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
        path: 'lettering-splash-screen-two',
        loadChildren: () =>
          import(
            './stages/lettering-stage-one/lettering-splash-two/lettering-splash-two.module'
          ).then((m) => m.LetteringSplashTwoModule),
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
    path: 'stage-2',
    component: LetteringStageTwoComponent,
  },
  {
    path: 'stage-3',
    component: LetteringStageThreeComponent,
  },
  {
    path: 'stage-4',
    component: LetteringStageFourComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringRoutingModule {}
