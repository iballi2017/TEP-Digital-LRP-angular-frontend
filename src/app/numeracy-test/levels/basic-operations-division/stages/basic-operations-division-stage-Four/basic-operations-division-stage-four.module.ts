import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicOperationsDivisionStageFourRoutingModule } from './basic-operations-division-stage-four-routing.module';
import { BasicOperationsDivisionStageFourComponent } from './basic-operations-division-stage-four.component';

@NgModule({
  declarations: [
    BasicOperationsDivisionStageFourComponent,
  ],
  imports: [CommonModule, BasicOperationsDivisionStageFourRoutingModule],
})
export class BasicOperationsDivisionStageFourModule {}
