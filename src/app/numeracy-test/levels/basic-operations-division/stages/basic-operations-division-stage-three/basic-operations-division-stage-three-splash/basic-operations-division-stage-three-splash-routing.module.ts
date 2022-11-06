import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsDivisionStageThreeInstructionalVideoComponent } from './basic-operations-division-stage-three-instructional-video/basic-operations-division-stage-three-instructional-video.component';
import { BasicOperationsDivisionStageThreeSplashComponent } from './basic-operations-division-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsDivisionStageThreeSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsDivisionStageThreeInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsDivisionStageThreeInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsDivisionStageThreeSplashRoutingModule {}
