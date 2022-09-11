import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity/lettering-stage-one-activity.component';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity/lettering-stage-three-activity.component';
import { ActivityTypeOneComponent } from './lettering-stage-two-activity/activity-type-one/activity-type-one.component';
import { ActivityTypeTwoComponent } from './lettering-stage-two-activity/activity-type-two/activity-type-two.component';
import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity/lettering-stage-two-activity.component';
import { LrpActivityComponent } from './lrp-activity.component';

const routes: Routes = [
  {
    path: '',
    component: LrpActivityComponent,
    children: [
      { path: '', component: LetteringStageOneActivityComponent },
      { path: 'ui-sample-one', component: LetteringStageOneActivityComponent },
      {
        path: 'ui-sample-two',
        component: LetteringStageTwoActivityComponent,
        children: [
          {
            path: '',
            component: ActivityTypeOneComponent,
          },
          {
            path: 'type-one',
            component: ActivityTypeOneComponent,
          },
          {
            path: 'type-two',
            component: ActivityTypeTwoComponent,
          },
        ],
      },
      {
        path: 'ui-sample-three',
        component: LetteringStageThreeActivityComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LrpActivityRoutingModule {}
