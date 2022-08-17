import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PronounceAntComponent } from './slides/pronounce-ant/pronounce-ant.component';
import { PronunciationComponent } from './pronunciation.component';

const routes: Routes = [
  {
    path: '',
    component: PronunciationComponent,
    children: [
      { path: '', component: PronounceAntComponent },
      { path: 'pronounce-ant', component: PronounceAntComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PronunciationRoutingModule {}
