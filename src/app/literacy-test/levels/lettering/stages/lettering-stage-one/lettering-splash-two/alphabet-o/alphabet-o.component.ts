import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-o',
  templateUrl: './alphabet-o.component.html',
  styleUrls: ['./alphabet-o.component.scss']
})
export class AlphabetOComponent implements OnInit {
  statement = "Another vowel letter is the letter 'o";
  leftLink = '/literacy/lettering/stage-1/pronunciation/pronounce-ice';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounced-o';
  srcFile = '';
  // '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
