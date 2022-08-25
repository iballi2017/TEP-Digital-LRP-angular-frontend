import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-screen',
  templateUrl: './fourth-screen.component.html',
  styleUrls: ['./fourth-screen.component.scss']
})
export class FourthScreenComponent implements OnInit, OnDestroy {
  leftLink = '/literacy/lettering/stage-1/lettering-splash/third-screen';
  rightLink = '/literacy/lettering/stage-1/lettering-splash/fifth-screen';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_fourth-screen.mp3';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.srcFile = '';
  }
}
