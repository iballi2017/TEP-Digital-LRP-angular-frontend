import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellingVowelLettersRoutingModule } from './spelling-vowel-letters-routing.module';
import { AVowelComponent } from './slides/a-vowel/a-vowel.component';
import { EVowelComponent } from './slides/e-vowel/e-vowel.component';
import { IVowelComponent } from './slides/i-vowel/i-vowel.component';
import { OVowelComponent } from './slides/o-vowel/o-vowel.component';
import { UVowelComponent } from './slides/u-vowel/u-vowel.component';
import { TopProgressBarComponent } from './components/top-progress-bar/top-progress-bar.component';
import { SpellingVowelLettersComponent } from './spelling-vowel-letters.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarkControlComponent } from './components/mark-control/mark-control.component';


@NgModule({
  declarations: [
    AVowelComponent,
    EVowelComponent,
    IVowelComponent,
    OVowelComponent,
    UVowelComponent,
    TopProgressBarComponent,
    SpellingVowelLettersComponent,
    MarkControlComponent
  ],
  imports: [
    CommonModule,
    SpellingVowelLettersRoutingModule,
    SharedModule
  ]
})
export class SpellingVowelLettersModule { }
