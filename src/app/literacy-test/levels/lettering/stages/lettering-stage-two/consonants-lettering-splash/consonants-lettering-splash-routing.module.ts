import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsonantsLetteringSplashComponent } from './consonants-lettering-splash.component';
import { FirstScreenConsonantSplashComponent } from './first-screen-consonant-splash/first-screen-consonant-splash.component';
import { FourthScreenConsonantSplashComponent } from './fourth-screen-consonant-splash/fourth-screen-consonant-splash.component';
import { SecondScreenConsonantSplashComponent } from './second-screen-consonant-splash/second-screen-consonant-splash.component';
import { ThirdScreenConsonantSplashComponent } from './third-screen-consonant-splash/third-screen-consonant-splash.component';

const routes: Routes = [
  {
    path: '',
    component: ConsonantsLetteringSplashComponent,
    children: [
      {
        path: '',
        component: FirstScreenConsonantSplashComponent,
      },
      {
        path: 'first-screen',
        component: FirstScreenConsonantSplashComponent,
      },
      {
        path: 'second-screen',
        component: SecondScreenConsonantSplashComponent,
      },
      {
        path: 'third-screen',
        component: ThirdScreenConsonantSplashComponent,
      },
      {
        path: 'fourth-screen',
        component: FourthScreenConsonantSplashComponent,
      },
      {
        path: 'fifth-screen',
        component: FirstScreenConsonantSplashComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsonantsLetteringSplashRoutingModule {}
