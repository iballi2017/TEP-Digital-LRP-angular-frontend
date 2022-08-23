import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlphabetAComponent } from './alphabet-a/alphabet-a.component';
import { LetteringSplashTwoComponent } from './lettering-splash-two.component';
// import { PronounceAntComponent } from './pronounce-ant/pronounce-ant.component';
import { SayAlphabetAComponent } from './alphabet-a/say-alphabet-a/say-alphabet-a.component';
import { AlphabetEComponent } from './alphabet-e/alphabet-e.component';
import { SayAlphabetEComponent } from './alphabet-e/say-alphabet-e/say-alphabet-e.component';
import { PronouncedAsEComponent } from './alphabet-e/pronounced-as-e/pronounced-as-e.component';
import { PronouncedAsIComponent } from './alphabet-i/pronounced-as-i/pronounced-as-i.component';
import { SayAlphabetIComponent } from './alphabet-i/say-alphabet-i/say-alphabet-i.component';
import { AlphabetIComponent } from './alphabet-i/alphabet-i.component';
import { AlphabetOComponent } from './alphabet-o/alphabet-o.component';
import { SayAlphabetOComponent } from './alphabet-o/say-alphabet-o/say-alphabet-o.component';
import { PronouncedAsOComponent } from './alphabet-o/pronounced-as-o/pronounced-as-o.component';
import { AlphabetUComponent } from './alphabet-u/alphabet-u.component';
import { SayAlphabetUComponent } from './alphabet-u/say-alphabet-u/say-alphabet-u.component';
import { PronouncedAsUComponent } from './alphabet-u/pronounced-as-u/pronounced-as-u.component';

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
      // 
      { path: 'alphabet-i', component: AlphabetIComponent },
      { path: 'say-alphabet-i', component: SayAlphabetIComponent },
      { path: 'pronounced-i', component: PronouncedAsIComponent },
      // 
      { path: 'alphabet-o', component: AlphabetOComponent },
      { path: 'say-alphabet-o', component: SayAlphabetOComponent },
      { path: 'pronounced-o', component: PronouncedAsOComponent },
      // 
      { path: 'alphabet-u', component: AlphabetUComponent },
      { path: 'say-alphabet-u', component: SayAlphabetUComponent },
      { path: 'pronounced-u', component: PronouncedAsUComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringSplashTwoRoutingModule {}
