import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiteracyTestRoutingModule } from './literacy-test-routing.module';
import { LetteringComponent } from './levels/lettering/lettering.component';
import { WordComponent } from './levels/word/word.component';
import { ParagraphComponent } from './levels/paragraph/paragraph.component';
import { StoryComponent } from './levels/story/story.component';
import { LiteracyTestSideNavigationComponent } from './components/literacy-test-side-navigation/literacy-test-side-navigation.component';
import { LiteracyTestComponent } from './literacy-test.component';
import { LetteringModule } from './levels/lettering/lettering.module';
import { SharedModule } from '../shared/shared.module';
import { WordModule } from './levels/word/word.module';
import { ParagraphModule } from './levels/paragraph/paragraph.module';
import { StoryModule } from './levels/story/story.module';
import { LiteracyStageCompletionComponent } from './literacy-stage-completion/literacy-stage-completion.component';
import { LiteracyLevelCompletionComponent } from './literacy-level-completion/literacy-level-completion.component';


@NgModule({
  declarations: [
    LiteracyTestComponent,
    LetteringComponent,
    WordComponent,
    ParagraphComponent,
    StoryComponent,
    LiteracyTestSideNavigationComponent,
    LiteracyStageCompletionComponent,
    LiteracyLevelCompletionComponent
  ],
  imports: [
    CommonModule,
    LiteracyTestRoutingModule,
    LetteringModule,
    WordModule,
    ParagraphModule,
    StoryModule,
    SharedModule
  ]
})
export class LiteracyTestModule { }
