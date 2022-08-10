import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetAComponent } from './alphabet-a/alphabet-a.component';
import { LetteringSplashTwoComponent } from './lettering-splash-two.component';
import { PronounceAntComponent } from './pronounce-ant/pronounce-ant.component';
import { SayAlphabetAComponent } from './say-alphabet-a/say-alphabet-a.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringSplashTwoComponent,
    children: [
      { path: '', component: AlphabetAComponent },
      { path: 'alphabet-a', component: AlphabetAComponent },
      { path: 'say-alphabet-a', component: SayAlphabetAComponent },
      { path: 'pronounce-ant', component: PronounceAntComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringSplashTwoRoutingModule {}
