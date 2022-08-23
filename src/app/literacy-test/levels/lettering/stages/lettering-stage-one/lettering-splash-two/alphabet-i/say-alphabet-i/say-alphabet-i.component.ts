import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-alphabet-i',
  templateUrl: './say-alphabet-i.component.html',
  styleUrls: ['./say-alphabet-i.component.scss'],
})
export class SayAlphabetIComponent implements OnInit {
  statement = "say after me 'i'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounced-i';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/pronunciation/pronounce-ice';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() {}

  ngOnInit(): void {}
}
