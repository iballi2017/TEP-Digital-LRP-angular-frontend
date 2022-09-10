import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LrpActivityRoutingModule } from './lrp-activity-routing.module';
import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity/lettering-stage-one-activity.component';
import { FormsModule } from '@angular/forms';
import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity/lettering-stage-two-activity.component';
import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity/lettering-stage-three-activity.component';


@NgModule({
  declarations: [
    LetteringStageOneActivityComponent,
    LetteringStageTwoActivityComponent,
    LetteringStageThreeActivityComponent
  ],
  imports: [
    CommonModule,
    LrpActivityRoutingModule,
    FormsModule
  ]
})
export class LrpActivityModule { }
