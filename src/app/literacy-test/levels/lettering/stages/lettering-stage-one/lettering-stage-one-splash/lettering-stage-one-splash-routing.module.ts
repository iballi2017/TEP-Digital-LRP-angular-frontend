import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringStageOneInstructionalVideoComponent } from './lettering-stage-one-instructional-video/lettering-stage-one-instructional-video.component';
import { LetteringStageOneSplashComponent } from './lettering-stage-one-splash.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringStageOneSplashComponent,
    children: [
      { path: '', component: LetteringStageOneInstructionalVideoComponent },
      {
        path: 'interlude',
        component: LetteringStageOneInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetteringStageOneSplashRoutingModule { }
