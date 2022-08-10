import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice.component';
import { SpeechSynthesisUtteranceComponent } from './speech-synthesis-utterance/speech-synthesis-utterance.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeComponent,
    children: [{ path: '', component: SpeechSynthesisUtteranceComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeRoutingModule {}
