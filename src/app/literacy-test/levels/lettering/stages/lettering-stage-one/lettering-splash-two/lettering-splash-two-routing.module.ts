import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetAComponent } from './alphabet-a/alphabet-a.component';
import { LetteringSplashTwoComponent } from './lettering-splash-two.component';
// import { PronounceAntComponent } from './pronounce-ant/pronounce-ant.component';
import { SayAlphabetAComponent } from './alphabet-a/say-alphabet-a/say-alphabet-a.component';
import { AlphabetEComponent } from './alphabet-e/alphabet-e.component';
import { SayAlphabetEComponent } from './alphabet-e/say-alphabet-e/say-alphabet-e.component';
import { PronouncedAsEComponent } from './alphabet-e/pronounced-as-e/pronounced-as-e.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringSplashTwoComponent,
    children: [
      { path: '', component: AlphabetAComponent },
      { path: 'alphabet-a', component: AlphabetAComponent },
      { path: 'say-alphabet-a', component: SayAlphabetAComponent },
      // 
      { path: 'alphabet-e', component: AlphabetEComponent },
      { path: 'say-alphabet-e', component: SayAlphabetEComponent },
      { path: 'pronounced-e', component: PronouncedAsEComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringSplashTwoRoutingModule {}
