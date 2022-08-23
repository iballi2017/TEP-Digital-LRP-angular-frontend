import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-i-vowel',
  templateUrl: './i-vowel.component.html',
  styleUrls: ['./i-vowel.component.scss']
})
export class IVowelComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/spelling-vowel-letters/e-vowel';
  rightLink = '/literacy/lettering/stage-1/spelling-vowel-letters/o-vowel';

  correctAnswer = {
    q3: '1',
  };
  wrongAnswer = {
    q3: '0',
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
