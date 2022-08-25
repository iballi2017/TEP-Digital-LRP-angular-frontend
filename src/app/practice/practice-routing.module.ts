import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PracticeComponent } from './practice.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpeechSynthesisUtteranceComponent } from './speech-synthesis-utterance/speech-synthesis-utterance.component';
import { UiTemplatesComponent } from './ui-templates/ui-templates.component';

const routes: Routes = [
  {
    path: '',
    component: PracticeComponent,
    children: [
      { path: '', component: SpeechSynthesisUtteranceComponent },
      {
        path: 'speech-synthesis',
        component: SpeechSynthesisUtteranceComponent,
      },
      { path: 'progress-bar', component: ProgressBarComponent },
      {
        path: 'ui-templates',
        loadChildren: () =>
          import('./ui-templates/ui-templates.module').then((s) => s.UiTemplatesModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeRoutingModule {}
