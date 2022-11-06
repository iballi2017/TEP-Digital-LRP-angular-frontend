import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsAdditionStageThreeInstructionalVideoComponent } from './basic-operations-addition-stage-three-instructional-video/basic-operations-addition-stage-three-instructional-video.component';
import { BasicOperationsAdditionStageThreeSplashComponent } from './basic-operations-addition-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsAdditionStageThreeSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsAdditionStageThreeInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsAdditionStageThreeInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsAdditionStageTwoSplashRoutingModule { }
