import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity/lettering-stage-one-activity.component';
import { LrpActivityComponent } from './lrp-activity.component';

const routes: Routes = [
  {
    path: '',
    component: LrpActivityComponent,
    children: [
      { path: '', component: LetteringStageOneActivityComponent },
      { path: 'ui-sample-one', component: LetteringStageOneActivityComponent },
      // { path: 'ui-sample-two', component: UiSampleTwoComponent },
      // { path: 'ui-sample-three', component: UiSampleThreeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LrpActivityRoutingModule {}
