import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-e-vowel',
  templateUrl: './e-vowel.component.html',
  styleUrls: ['./e-vowel.component.scss'],
})
export class EVowelComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/spelling-vowel-letters/a-vowel';
  rightLink = '/literacy/lettering/stage-1/spelling-vowel-letters/i-vowel';
  correctAnswer = {
    q2: '1',
  };
  wrongAnswer = {
    q2: '0',
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
