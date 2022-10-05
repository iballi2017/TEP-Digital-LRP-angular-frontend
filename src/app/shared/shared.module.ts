import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbTopbarComponent } from '../literacy-test/components/breadcrumb-topbar/breadcrumb-topbar.component';
import { SpeechSynthesisUtteranceComponent } from './components/speech-synthesis-utterance/speech-synthesis-utterance.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrowControlsComponent } from './components/arrow-controls/arrow-controls.component';
import { SharedRoutingModule } from './shared.routing.module';
import { LiteracyTestSideNavigationComponent } from './components/literacy-test-side-navigation/literacy-test-side-navigation.component';
import { PureCssLoaderComponent } from './components/pure-css-loader/pure-css-loader.component';
import { BooleanAlertDialogComponent } from './components/boolean-alert-dialog/boolean-alert-dialog.component';
import { MobileNavigationDialogComponent } from './components/mobile-navigation-dialog/mobile-navigation-dialog.component';
import { TableColumnActionButtonsComponent } from './components/table-column-action-buttons/table-column-action-buttons.component';
import { VoiceAudioPlayerComponent } from './components/voice-audio-player/voice-audio-player.component';
import { MarkControlComponent } from './components/mark-control/mark-control.component';
import { StageCompletionComponent } from './views/stage-completion/stage-completion.component';
import { ButtonComponent } from './components/button/button.component';
import { LevelLoaderComponent } from './views/level-loader/level-loader.component';
import { NgMaterialModule } from '../ng-material/ng-material.module';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TopProgressBarComponent } from './components/top-progress-bar/top-progress-bar.component';
import { AudienceApplauseComponent } from './components/audience-applause/audience-applause.component';
import { LevelCompletionComponent } from './views/level-completion/level-completion.component';
import { ProgramCompletionComponent } from './views/program-completion/program-completion.component';
import { RefreshGameButtonComponent } from './components/refresh-game-button/refresh-game-button.component';

@NgModule({
  declarations: [
    BreadcrumbTopbarComponent,
    SpeechSynthesisUtteranceComponent,
    ArrowControlsComponent,
    LiteracyTestSideNavigationComponent,
    PureCssLoaderComponent,
    BooleanAlertDialogComponent,
    MobileNavigationDialogComponent,
    TableColumnActionButtonsComponent,
    VoiceAudioPlayerComponent,
    MarkControlComponent,
    StageCompletionComponent,
    ButtonComponent,
    LevelLoaderComponent,
    SnackbarComponent,
    TopProgressBarComponent,
    AudienceApplauseComponent,
    LevelCompletionComponent,
    ProgramCompletionComponent,
    RefreshGameButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    NgMaterialModule
  ],
  exports: [
    BreadcrumbTopbarComponent,
    SpeechSynthesisUtteranceComponent,
    ArrowControlsComponent,
    LiteracyTestSideNavigationComponent,
    PureCssLoaderComponent,
    TableColumnActionButtonsComponent,
    VoiceAudioPlayerComponent,
    MarkControlComponent,
    StageCompletionComponent,
    ButtonComponent,
    LevelLoaderComponent,
    TopProgressBarComponent,
    AudienceApplauseComponent,
    LevelCompletionComponent,
    ProgramCompletionComponent,
    RefreshGameButtonComponent,
  ],
})
export class SharedModule {}
