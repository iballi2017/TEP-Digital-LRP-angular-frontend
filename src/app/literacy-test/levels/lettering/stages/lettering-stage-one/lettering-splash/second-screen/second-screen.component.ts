import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss'],
})
export class SecondScreenComponent implements OnInit, OnDestroy {
  statement = 'Audu is spelled A, U, D, U Audu';
  leftLink = '/literacy/lettering/stage-1/lettering-splash/first-screen';
  rightLink = '/literacy/lettering/stage-1/lettering-splash/third-screen';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_second-screen.mp3';

  constructor() {}

  ngOnInit(): void {}

  
  ngOnDestroy(): void {
    this.srcFile = "";
   }
 
}
