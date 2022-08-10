import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AVowelComponent } from './slides/a-vowel/a-vowel.component';
import { EVowelComponent } from './slides/e-vowel/e-vowel.component';
import { IVowelComponent } from './slides/i-vowel/i-vowel.component';
import { OVowelComponent } from './slides/o-vowel/o-vowel.component';
import { UVowelComponent } from './slides/u-vowel/u-vowel.component';
import { SpellingVowelLettersComponent } from './spelling-vowel-letters.component';

const routes: Routes = [
  { path: '', component: SpellingVowelLettersComponent, 
children:[
  {
    path: '', component: AVowelComponent
  },
  {
    path: 'a-vowel', component: AVowelComponent
  },
  {
    path: 'e-vowel', component: EVowelComponent
  },
  {
    path: 'i-vowel', component: IVowelComponent
  },
  {
    path: 'o-vowel', component: OVowelComponent
  },
  {
    path: 'u-vowel', component: UVowelComponent
  }
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpellingVowelLettersRoutingModule { }
