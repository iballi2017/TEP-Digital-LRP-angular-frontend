import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet-a',
  templateUrl: './alphabet-a.component.html',
  styleUrls: ['./alphabet-a.component.scss'],
})
export class AlphabetAComponent implements OnInit {
  statement = "Let Us Start With The Letter 'a'. It is Pronounced As 'a'";
  leftLink = '/literacy/stage-1/spelling-vowel-letters/u-vowel';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two/say-alphabet-a';
  srcFile = '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two.mp3';
  

  constructor() {}

  ngOnInit(): void {}
}
