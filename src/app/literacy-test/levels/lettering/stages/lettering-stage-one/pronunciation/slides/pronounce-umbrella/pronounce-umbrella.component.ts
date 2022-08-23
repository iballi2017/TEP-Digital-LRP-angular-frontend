import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-pronounce-umbrella',
  templateUrl: './pronounce-umbrella.component.html',
  styleUrls: ['./pronounce-umbrella.component.scss'],
})
export class PronounceUmbrellaComponent implements OnInit {
  statement = "'a' as in 'owl'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-u';
  rightLink = '/literacy/lettering/stage-1/identify-vowel-letters/introduction';
  srcFile = '';
  // '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_pronounce-egg.mp3';
  correctAnswer = {
    q10: '1',
  };
  wrongAnswer = {
    q10: '0',
  };


  isCorrect = false;
  constructor() {}

  ngOnInit(): void {}

  onCorrect($event: any, isCorrect:boolean) {
    console.log('event: ', $event);
    console.log('isCorrect: ', isCorrect);
    this.onSubmitAnswer($event);
    this.isCorrect = isCorrect;
  }
  onWrong($event: any, isCorrect:boolean) {
    console.log('event: ', $event);
    this.onSubmitAnswer($event);
    this.isCorrect = isCorrect;
  }

  onSubmitAnswer(response: any) {
    new GameResult(response).save();
  }
}
