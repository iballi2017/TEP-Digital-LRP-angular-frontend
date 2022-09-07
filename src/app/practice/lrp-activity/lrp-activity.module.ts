import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LrpActivityRoutingModule } from './lrp-activity-routing.module';
import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity/lettering-stage-one-activity.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LetteringStageOneActivityComponent
  ],
  imports: [
    CommonModule,
    LrpActivityRoutingModule,
    FormsModule
  ]
})
export class LrpActivityModule { }
