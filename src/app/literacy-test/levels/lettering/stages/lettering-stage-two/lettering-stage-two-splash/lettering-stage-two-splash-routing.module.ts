import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringStageTwoSplashComponent } from './lettering-stage-two-splash.component';
import { InstructionalVidLetteringStageTwoComponent } from './instructional-vid-lettering-stage-two/instructional-vid-lettering-stage-two.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringStageTwoSplashComponent,
    children: [
      {path: '', component: InstructionalVidLetteringStageTwoComponent},
      {path: 'interlude', component: InstructionalVidLetteringStageTwoComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringStageTwoSplashRoutingModule {}
