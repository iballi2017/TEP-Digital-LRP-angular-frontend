import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-screen',
  templateUrl: './sixth-screen.component.html',
  styleUrls: ['./sixth-screen.component.scss']
})
export class SixthScreenComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/lettering-splash/fifth-screen';
  rightLink = '/literacy/lettering/stage-1/spelling-vowel-letters';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_sixth-screen.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
