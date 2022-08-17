import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronounce-ant',
  templateUrl: './pronounce-ant.component.html',
  styleUrls: ['./pronounce-ant.component.scss']
})
export class PronounceAntComponent implements OnInit {
  statement = "'a' as in 'ant'";
  leftLink = '/literacy/stage-1/lettering-splash-screen-two/say-alphabet-a';
  rightLink = '';
  srcFile = '../../../../../../../../assets/audio/literacy_stage-1_lettering-splash-screen-two_pronounce-ant.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
