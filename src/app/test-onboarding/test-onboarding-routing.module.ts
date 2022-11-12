import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionCategoryOptionsComponent } from './question-category-options/question-category-options.component';
import { TestOnboardingComponent } from './test-onboarding.component';

const routes: Routes = [
  {
    path: '',
    component: TestOnboardingComponent,
    children: [
      { path: '', component: QuestionCategoryOptionsComponent },
      { path: 'category-options', component: QuestionCategoryOptionsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestOnboardingRoutingModule {}
