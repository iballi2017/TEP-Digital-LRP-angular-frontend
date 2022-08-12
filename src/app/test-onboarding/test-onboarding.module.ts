import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCategoryOptionsComponent } from './question-category-options/question-category-options.component';
import { TestOnboardingRoutingModule } from './test-onboarding-routing.module';
import { NumberOfUsersInputDialogComponent } from './components/number-of-users-input-dialog/number-of-users-input-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestRespondentSelectionComponent } from './components/test-respondent-selection/test-respondent-selection.component';



@NgModule({
  declarations: [
    QuestionCategoryOptionsComponent,
    NumberOfUsersInputDialogComponent,
    TestRespondentSelectionComponent
  ],
  imports: [
    CommonModule,
    TestOnboardingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TestOnboardingModule { }
