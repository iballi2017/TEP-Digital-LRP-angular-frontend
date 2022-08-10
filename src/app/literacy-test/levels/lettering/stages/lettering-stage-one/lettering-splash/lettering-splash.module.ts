import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LetteringSplashRoutingModule } from './lettering-splash-routing.module';
import { ThirdScreenComponent } from './third-screen/third-screen.component';
import { FourthScreenComponent } from './fourth-screen/fourth-screen.component';
import { FifthScreenComponent } from './fifth-screen/fifth-screen.component';
import { SixthScreenComponent } from './sixth-screen/sixth-screen.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
// import { RouterModule } from '@angular/router';
import { SecondScreenComponent } from './second-screen/second-screen.component';
import { LetteringSplashComponent } from './lettering-splash.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LetteringSplashComponent,
    FirstScreenComponent,
    SecondScreenComponent,
    ThirdScreenComponent,
    FourthScreenComponent,
    FifthScreenComponent,
    SixthScreenComponent,
  ],
  imports: [
    CommonModule,
    LetteringSplashRoutingModule,
    SharedModule
    // RouterModule
  ],
  // exports:[
  //   ThirdScreenComponent,
  //   FourthScreenComponent,
  //   FifthScreenComponent,
  //   SixthScreenComponent
  // ]
})
export class LetteringSplashModule {}
