import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-alphabet-u',
  templateUrl: './say-alphabet-u.component.html',
  styleUrls: ['./say-alphabet-u.component.scss']
})
export class SayAlphabetUComponent implements OnInit {
  statement = "say after me 'u'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounced-u';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/pronunciation/pronounce-umbrella';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
