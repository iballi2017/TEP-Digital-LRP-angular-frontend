import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PronounceAntComponent } from './slides/pronounce-ant/pronounce-ant.component';
import { PronunciationComponent } from './pronunciation.component';
import { PronounceEggComponent } from './slides/pronounce-egg/pronounce-egg.component';
import { PronounceIceComponent } from './slides/pronounce-ice/pronounce-ice.component';
import { PronounceOwlComponent } from './slides/pronounce-owl/pronounce-owl.component';
import { PronounceUmbrellaComponent } from './slides/pronounce-umbrella/pronounce-umbrella.component';

const routes: Routes = [
  {
    path: '',
    component: PronunciationComponent,
    children: [
      { path: '', component: PronounceAntComponent },
      { path: 'pronounce-ant', component: PronounceAntComponent },
      { path: 'pronounce-egg', component: PronounceEggComponent },
      { path: 'pronounce-ice', component: PronounceIceComponent },
      { path: 'pronounce-owl', component: PronounceOwlComponent },
      { path: 'pronounce-umbrella', component: PronounceUmbrellaComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PronunciationRoutingModule {}
