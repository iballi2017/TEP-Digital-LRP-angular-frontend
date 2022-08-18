import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PronounceAntComponent } from './slides/pronounce-ant/pronounce-ant.component';
import { PronunciationComponent } from './pronunciation.component';
import { PronounceEggComponent } from './slides/pronounce-egg/pronounce-egg.component';

const routes: Routes = [
  {
    path: '',
    component: PronunciationComponent,
    children: [
      { path: '', component: PronounceAntComponent },
      { path: 'pronounce-ant', component: PronounceAntComponent },
      { path: 'pronounce-egg', component: PronounceEggComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PronunciationRoutingModule {}
