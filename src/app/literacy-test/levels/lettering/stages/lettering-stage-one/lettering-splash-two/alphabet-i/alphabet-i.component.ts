import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-i',
  templateUrl: './alphabet-i.component.html',
  styleUrls: ['./alphabet-i.component.scss'],
})
export class AlphabetIComponent implements OnInit {
  statement = "Another vowel letter is the letter 'i";
  leftLink = '/literacy/lettering/stage-1/pronunciation/pronounce-egg';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounced-i';
  srcFile = '';
  // '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_alphabet-e.mp3';

  constructor() {}

  ngOnInit(): void {}
}
