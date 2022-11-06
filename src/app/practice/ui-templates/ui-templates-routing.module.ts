import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiTemplatesComponent } from './ui-templates.component';
import { UiSampleOneComponent } from './views/ui-sample-one/ui-sample-one.component';
import { UiSampleThreeComponent } from './views/ui-sample-three/ui-sample-three.component';
import { UiSampleTwoComponent } from './views/ui-sample-two/ui-sample-two.component';

const routes: Routes = [
  {
    path: '',
    component: UiTemplatesComponent,
    children: [
      { path: '', component: UiSampleOneComponent },
      { path: 'ui-sample-one', component: UiSampleOneComponent },
      { path: 'ui-sample-two', component: UiSampleTwoComponent },
      { path: 'ui-sample-three', component: UiSampleThreeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiTemplatesRoutingModule {}
