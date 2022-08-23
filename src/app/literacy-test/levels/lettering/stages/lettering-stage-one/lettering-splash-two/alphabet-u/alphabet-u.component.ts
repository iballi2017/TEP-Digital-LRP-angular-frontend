import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-u',
  templateUrl: './alphabet-u.component.html',
  styleUrls: ['./alphabet-u.component.scss']
})
export class AlphabetUComponent implements OnInit {
  statement = "Another vowel letter is the letter 'u";
  leftLink = '/literacy/lettering/stage-1/pronunciation/pronounce-owl';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounced-u';
  srcFile = '';
  // '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
