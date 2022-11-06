import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsDivisionStageFiveInstructionalVideoComponent } from './basic-operations-division-stage-five-instructional-video/basic-operations-division-stage-five-instructional-video.component';
import { BasicOperationsDivisionStageFiveSplashComponent } from './basic-operations-division-stage-five-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsDivisionStageFiveSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsDivisionStageFiveInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsDivisionStageFiveInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsDivisionStageFiveSplashRoutingModule {}
