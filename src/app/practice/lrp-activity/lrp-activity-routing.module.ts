import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity/lettering-stage-one-activity.component';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity/lettering-stage-three-activity.component';
import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity/lettering-stage-two-activity.component';
import { LrpActivityComponent } from './lrp-activity.component';

const routes: Routes = [
  {
    path: '',
    component: LrpActivityComponent,
    children: [
      { path: '', component: LetteringStageOneActivityComponent },
      { path: 'ui-sample-one', component: LetteringStageOneActivityComponent },
      { path: 'ui-sample-two', component: LetteringStageTwoActivityComponent },
      { path: 'ui-sample-three', component: LetteringStageThreeActivityComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LrpActivityRoutingModule {}
