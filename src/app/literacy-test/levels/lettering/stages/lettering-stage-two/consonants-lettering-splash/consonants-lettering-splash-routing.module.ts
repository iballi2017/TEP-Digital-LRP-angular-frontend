import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsonantsLetteringSplashComponent } from './consonants-lettering-splash.component';
import { FifthScreenConsonantSplashComponent } from './fifth-screen-consonant-splash/fifth-screen-consonant-splash.component';
import { FirstScreenConsonantSplashComponent } from './first-screen-consonant-splash/first-screen-consonant-splash.component';
import { FourthScreenConsonantSplashComponent } from './fourth-screen-consonant-splash/fourth-screen-consonant-splash.component';
import { InstructionalVidLetteringStageTwoComponent } from './instructional-vid-lettering-stage-two/instructional-vid-lettering-stage-two.component';
import { SecondScreenConsonantSplashComponent } from './second-screen-consonant-splash/second-screen-consonant-splash.component';
import { ThirdScreenConsonantSplashComponent } from './third-screen-consonant-splash/third-screen-consonant-splash.component';

const routes: Routes = [
  {
    path: '',
    component: ConsonantsLetteringSplashComponent,
    children: [
      {path: '', component: InstructionalVidLetteringStageTwoComponent},
      {path: 'interlude', component: InstructionalVidLetteringStageTwoComponent},
      // {
      //   path: '',
      //   component: FirstScreenConsonantSplashComponent,
      // },
      // {
      //   path: 'first-screen',
      //   component: FirstScreenConsonantSplashComponent,
      // },
      // {
      //   path: 'second-screen',
      //   component: SecondScreenConsonantSplashComponent,
      // },
      // {
      //   path: 'third-screen',
      //   component: ThirdScreenConsonantSplashComponent,
      // },
      // {
      //   path: 'fourth-screen',
      //   component: FourthScreenConsonantSplashComponent,
      // },
      // {
      //   path: 'fifth-screen',
      //   component: FifthScreenConsonantSplashComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsonantsLetteringSplashRoutingModule {}
