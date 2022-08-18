import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-e',
  templateUrl: './alphabet-e.component.html',
  styleUrls: ['./alphabet-e.component.scss']
})
export class AlphabetEComponent implements OnInit {
  statement = "Another vowel letter is the letter 'e";
  leftLink = '/literacy/stage-1/pronunciation';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two/pronounced-e';
  srcFile = '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
