import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsMultiplicationStageFourInstructionalVideoComponent } from './basic-operations-multiplication-stage-four-instructional-video/basic-operations-multiplication-stage-four-instructional-video.component';
import { BasicOperationsMultiplicationStageFourSplashComponent } from './basic-operations-multiplication-stage-four-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsMultiplicationStageFourSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsMultiplicationStageFourInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsMultiplicationStageFourInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsMultiplicationStageFourSplashRoutingModule {}
