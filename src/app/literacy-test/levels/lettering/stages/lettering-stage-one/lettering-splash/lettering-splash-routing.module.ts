import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthScreenComponent } from './fifth-screen/fifth-screen.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { FourthScreenComponent } from './fourth-screen/fourth-screen.component';
import { LetteringSplashComponent } from './lettering-splash.component';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { SixthScreenComponent } from './sixth-screen/sixth-screen.component';
import { ThirdScreenComponent } from './third-screen/third-screen.component';

const routes: Routes = [
  {
    path: '',
    component: LetteringSplashComponent,
    children: [
      {
        path: '',
        component: FirstScreenComponent,
      },
      {
        path: 'first-screen',
        component: FirstScreenComponent,
      },
      {
        path: 'second-screen',
        component: SecondScreenComponent,
      },
      {
        path: 'third-screen',
        component: ThirdScreenComponent,
      },
      {
        path: 'fourth-screen',
        component: FourthScreenComponent,
      },
      {
        path: 'fifth-screen',
        component: FifthScreenComponent,
      },
      {
        path: 'sixth-screen',
        component: SixthScreenComponent,
      },
      {
        path: 'a-lettering-splash',
        loadChildren: () =>
          import(
            './vowels-splash-screens/a-lettering-splash/a-lettering-splash.module'
          ).then((m) => m.ALetteringSplashModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LetteringSplashRoutingModule {}
