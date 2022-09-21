import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordStageOneInstructionalVideoComponent } from '../stages/word-stage-one/word-stage-one-splash/word-stage-one-instructional-video/word-stage-one-instructional-video.component';
import { WordStageSplashComponent } from './word-stage-splash.component';

const routes: Routes = [
  {
    path: '',
    component: WordStageSplashComponent,
    children: [
      { path: '', component: WordStageOneInstructionalVideoComponent },
      { path: 'interlude', component: WordStageOneInstructionalVideoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WordStageSplashRoutingModule {}
