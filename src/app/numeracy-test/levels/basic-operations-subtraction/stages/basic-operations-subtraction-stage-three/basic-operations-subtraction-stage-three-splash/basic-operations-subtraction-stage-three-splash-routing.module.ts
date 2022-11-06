import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsSubtractionStageThreeInstructionalVideoComponent } from './basic-operations-subtraction-stage-three-instructional-video/basic-operations-subtraction-stage-three-instructional-video.component';
import { BasicOperationsSubtractionStageThreeSplashComponent } from './basic-operations-subtraction-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsSubtractionStageThreeSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsSubtractionStageThreeInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsSubtractionStageThreeInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsSubtractionStageThreeSplashRoutingModule {}
