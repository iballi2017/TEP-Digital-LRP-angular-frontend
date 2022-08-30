import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringStageTwoPronunciationComponent } from './lettering-stage-two-pronunciation.component';
import { PronounceBallComponent } from './slides/pronounce-ball/pronounce-ball.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringStageTwoPronunciationComponent,
    children: [
      { path: '', component: PronounceBallComponent },
      { path: 'pronounce-ball', component: PronounceBallComponent },
    //   { path: 'pronounce-egg', component: PronounceEggComponent },
    //   { path: 'pronounce-ice', component: PronounceIceComponent },
    //   { path: 'pronounce-owl', component: PronounceOwlComponent },
    //   { path: 'pronounce-umbrella', component: PronounceUmbrellaComponent },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetteringStageTwoPronunciationRoutingModule { }
