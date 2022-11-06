import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LrpActivityRoutingModule } from './lrp-activity-routing.module';
import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity/lettering-stage-one-activity.component';
import { FormsModule } from '@angular/forms';
import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity/lettering-stage-two-activity.component';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity/lettering-stage-three-activity.component';
import { ActivityTypeOneComponent } from './lettering-stage-two-activity/activity-type-one/activity-type-one.component';
import { ActivityTypeTwoComponent } from './lettering-stage-two-activity/activity-type-two/activity-type-two.component';


@NgModule({
  declarations: [
    LetteringStageOneActivityComponent,
    LetteringStageTwoActivityComponent,
    LetteringStageThreeActivityComponent,
    ActivityTypeOneComponent,
    ActivityTypeTwoComponent
  ],
  imports: [
    CommonModule,
    LrpActivityRoutingModule,
    FormsModule
  ]
})
export class LrpActivityModule { }
