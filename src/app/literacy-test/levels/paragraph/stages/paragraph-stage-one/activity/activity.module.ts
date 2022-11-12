import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ExerciseComponent } from './exercise/exercise.component';
import { ActivityComponent } from './activity.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ExerciseComponent,
    ActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class ActivityModule { }
