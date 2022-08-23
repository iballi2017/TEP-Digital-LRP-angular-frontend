import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsonantsLetteringSplashRoutingModule } from './consonants-lettering-splash-routing.module';
import { SecondScreenConsonantSplashComponent } from './second-screen-consonant-splash/second-screen-consonant-splash.component';
import { FirstScreenConsonantSplashComponent } from './first-screen-consonant-splash/first-screen-consonant-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsonantsLetteringSplashComponent } from './consonants-lettering-splash.component';


@NgModule({
  declarations: [
    ConsonantsLetteringSplashComponent,
    SecondScreenConsonantSplashComponent,
    FirstScreenConsonantSplashComponent
  ],
  imports: [
    CommonModule,
    ConsonantsLetteringSplashRoutingModule,
    SharedModule
  ]
})
export class ConsonantsLetteringSplashModule { }
