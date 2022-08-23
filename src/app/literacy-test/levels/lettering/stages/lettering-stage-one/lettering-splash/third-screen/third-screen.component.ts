import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss']
})
export class ThirdScreenComponent implements OnInit, OnDestroy {
  leftLink = '/literacy/lettering/stage-1/lettering-splash/second-screen';
  rightLink = '/literacy/lettering/stage-1/lettering-splash/fourth-screen';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_third-screen.mp3';
  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.srcFile = "";
   }
 
}
