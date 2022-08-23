import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-screen',
  templateUrl: './fifth-screen.component.html',
  styleUrls: ['./fifth-screen.component.scss']
})
export class FifthScreenComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/lettering-splash/fourth-screen';
  rightLink = '/literacy/lettering/stage-1/lettering-splash/sixth-screen';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_fifth-screen.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
