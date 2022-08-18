import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-u-vowel',
  templateUrl: './u-vowel.component.html',
  styleUrls: ['./u-vowel.component.scss'],
})
export class UVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/o-vowel';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two';
  statement = '';
  correctAnswer = {
    q5: 1,
  };
  wrongAnswer = {
    q5: 0,
  };

  constructor() {}

  ngOnInit(): void {}
  onCorrect($event: any) {
    console.log('event: ', $event);
    this.onSubmitAnswer($event);
  }
  onWrong($event: any) {
    console.log('event: ', $event);
    this.onSubmitAnswer($event);
  }

  onSubmitAnswer(response: any) {
    new GameResult(response).save();
  }
}
