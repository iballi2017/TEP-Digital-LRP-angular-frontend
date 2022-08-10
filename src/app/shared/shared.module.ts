import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbTopbarComponent } from '../literacy-test/components/breadcrumb-topbar/breadcrumb-topbar.component';
import { SpeechSynthesisUtteranceComponent } from './components/speech-synthesis-utterance/speech-synthesis-utterance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrowControlsComponent } from './components/arrow-controls/arrow-controls.component';
import { SharedRoutingModule } from './shared.routing.module';
import { LiteracyTestSideNavigationComponent } from './components/literacy-test-side-navigation/literacy-test-side-navigation.component';
import { PureCssLoaderComponent } from './components/pure-css-loader/pure-css-loader.component';

@NgModule({
  declarations: [
    BreadcrumbTopbarComponent,
    SpeechSynthesisUtteranceComponent,
    ArrowControlsComponent,
    LiteracyTestSideNavigationComponent,
    PureCssLoaderComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedRoutingModule],
  exports: [
    BreadcrumbTopbarComponent,
    SpeechSynthesisUtteranceComponent,
    ArrowControlsComponent,
    LiteracyTestSideNavigationComponent,
    PureCssLoaderComponent
  ],
})
export class SharedModule {}
