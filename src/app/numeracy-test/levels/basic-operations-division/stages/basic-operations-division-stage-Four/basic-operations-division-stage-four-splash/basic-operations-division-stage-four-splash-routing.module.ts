import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsDivisionStageFourInstructionalVideoComponent } from './basic-operations-division-stage-four-instructional-video/basic-operations-division-stage-four-instructional-video.component';
import { BasicOperationsDivisionStageFourSplashComponent } from './basic-operations-division-stage-four-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsDivisionStageFourSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsDivisionStageFourInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsDivisionStageFourInstructionalVideoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicOperationsDivisionStageFourSplashRoutingModule {}
