import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LevelLoaderComponent } from './views/level-loader/level-loader.component';

const routes: Routes = [
  { path: 'new-task-loading/:levelTitle/:stageNumber', component: LevelLoaderComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
