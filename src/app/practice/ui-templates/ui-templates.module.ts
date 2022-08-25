import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiTemplatesRoutingModule } from './ui-templates-routing.module';
import { UiTemplatesComponent } from './ui-templates.component';
import { UiSampleOneComponent } from './views/ui-sample-one/ui-sample-one.component';
import { UiSampleTwoComponent } from './views/ui-sample-two/ui-sample-two.component';
import { ArrowControlsComponent } from './components/arrow-controls/arrow-controls.component';
import { UiSampleThreeComponent } from './views/ui-sample-three/ui-sample-three.component';


@NgModule({
  declarations: [UiTemplatesComponent, UiSampleOneComponent, UiSampleTwoComponent, ArrowControlsComponent, UiSampleThreeComponent],
  imports: [
    CommonModule,
    UiTemplatesRoutingModule
  ]
})
export class UiTemplatesModule { }
