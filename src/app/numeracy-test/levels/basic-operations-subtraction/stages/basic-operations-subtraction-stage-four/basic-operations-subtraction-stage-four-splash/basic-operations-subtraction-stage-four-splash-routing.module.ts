import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsSubtractionStageFourInstructionalVideoComponent } from './basic-operations-subtraction-stage-four-instructional-video/basic-operations-subtraction-stage-four-instructional-video.component';
import { BasicOperationsSubtractionStageFourSplashComponent } from './basic-operations-subtraction-stage-four-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsSubtractionStageFourSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsSubtractionStageFourInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsSubtractionStageFourInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsSubtractionStageFourSplashRoutingModule {}
