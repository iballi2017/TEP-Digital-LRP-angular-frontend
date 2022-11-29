import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PracticeRoutingModule } from './practice-routing.module';
import { PracticeComponent } from './practice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpeechSynthesisUtteranceComponent } from './speech-synthesis-utterance/speech-synthesis-utterance.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { LrpActivityComponent } from './lrp-activity/lrp-activity.component';
import { PracticeMenuComponent } from './practice-menu/practice-menu.component';
import { FilterAndSearchComponent } from './filter-and-search/filter-and-search.component';

@NgModule({
  declarations: [
    PracticeComponent,
    SpeechSynthesisUtteranceComponent,
    ProgressBarComponent,
    MainNavigationComponent,
    LrpActivityComponent,
    PracticeMenuComponent,
    FilterAndSearchComponent,
  ],
  imports: [
    CommonModule,
    PracticeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PracticeModule {}
