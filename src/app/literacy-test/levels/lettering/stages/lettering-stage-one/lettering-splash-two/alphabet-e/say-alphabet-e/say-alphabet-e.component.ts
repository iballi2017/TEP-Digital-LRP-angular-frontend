import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-alphabet-e',
  templateUrl: './say-alphabet-e.component.html',
  styleUrls: ['./say-alphabet-e.component.scss'],
})
export class SayAlphabetEComponent implements OnInit {
  statement = "say after me 'e'";
  leftLink = '/literacy/stage-1/lettering-splash-screen-two/pronounced-e';
  // rightLink = '/literacy/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/stage-1/pronunciation/pronounce-egg';

  srcFile =
    '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() {}

  ngOnInit(): void {}
}
