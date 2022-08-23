import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-alphabet-o',
  templateUrl: './say-alphabet-o.component.html',
  styleUrls: ['./say-alphabet-o.component.scss']
})
export class SayAlphabetOComponent implements OnInit {
  statement = "say after me 'o'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounced-o';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/pronunciation/pronounce-owl';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
