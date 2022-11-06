import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionalVidLetteringStageThreeBComponent } from './instructional-vid-lettering-stage-three-b/instructional-vid-lettering-stage-three-b.component';
import { InstructionalVidLetteringStageThreeComponent } from './instructional-vid-lettering-stage-three/instructional-vid-lettering-stage-three.component';
import { LetteringStageThreeSplashComponent } from './lettering-stage-three-splash.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringStageThreeSplashComponent,
    children: [
      {path: '', component: InstructionalVidLetteringStageThreeComponent},
      {path: 'interlude', component: InstructionalVidLetteringStageThreeComponent},
      {path: 'interlude-b', component: InstructionalVidLetteringStageThreeBComponent},
     
    ],
  },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LetteringStageThreeSplashRoutingModule { }
