import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-u-vowel',
  templateUrl: './u-vowel.component.html',
  styleUrls: ['./u-vowel.component.scss'],
})
export class UVowelComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/spelling-vowel-letters/o-vowel';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two';
  statement = '';
  correctAnswer = {
    q5: '1',
  };
  wrongAnswer = {
    q5: '0',
  };

  isCorrect = false;

  constructor() {}

  ngOnInit(): void {}
  onCorrect($event: any, isCorrect: boolean) {
    console.log('event: ', $event);
    console.log('isCorrect: ', isCorrect);
    this.onSubmitAnswer($event);
    this.isCorrect = isCorrect;
  }
  onWrong($event: any, isCorrect: boolean) {
    console.log('event: ', $event);
    this.onSubmitAnswer($event);
    this.isCorrect = isCorrect;
  }

  onSubmitAnswer(response: any) {
    new GameResult(response).save();
  }
}
