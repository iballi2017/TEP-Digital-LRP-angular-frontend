import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LetteringComponent } from './levels/lettering/lettering.component';
// import { LetteringStageOneComponent } from './levels/lettering/stages/lettering-stage-one/lettering-stage-one.component';
import { ParagraphComponent } from './levels/paragraph/paragraph.component';
import { StoryComponent } from './levels/story/story.component';
import { WordComponent } from './levels/word/word.component';
import { LiteracyTestComponent } from './literacy-test.component';

const routes: Routes = [
  {
    path: '',
    component: LiteracyTestComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'levels/lettering' },
      { path: 'levels/lettering', component: LetteringComponent },
      { path: 'levels/paragraph', component: ParagraphComponent },
      { path: 'levels/word', component: WordComponent },
      { path: 'levels/story', component: StoryComponent },
    ],
  },
  // {
  //   path:"stage-1", component: LetteringStageOneComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiteracyTestRoutingModule {}
