import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-alphabet-a',
  templateUrl: './say-alphabet-a.component.html',
  styleUrls: ['./say-alphabet-a.component.scss']
})
export class SayAlphabetAComponent implements OnInit {
  statement = "Say After Me 'a'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/pronunciation';
  
  srcFile = '../../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two_say-alphabet-a.mp3';
  constructor() { }

  ngOnInit(): void {
  }

}
