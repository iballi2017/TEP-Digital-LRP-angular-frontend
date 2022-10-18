import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicOperationsAdditionStageFourInstructionalVideoComponent } from './basic-operations-addition-stage-four-instructional-video/basic-operations-addition-stage-four-instructional-video.component';
import { BasicOperationsAdditionStageFourSplashComponent } from './basic-operations-addition-stage-four-splash.component';

const routes: Routes = [
  {
    path: '',
    component: BasicOperationsAdditionStageFourSplashComponent,
    children: [
      {
        path: '',
        component: BasicOperationsAdditionStageFourInstructionalVideoComponent,
      },
      {
        path: 'interlude',
        component: BasicOperationsAdditionStageFourInstructionalVideoComponent,
      },
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicOperationsAdditionStageFourSplashRoutingModule { }
