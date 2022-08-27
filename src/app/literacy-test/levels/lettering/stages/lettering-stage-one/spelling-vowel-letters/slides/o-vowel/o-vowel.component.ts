import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-o-vowel',
  templateUrl: './o-vowel.component.html',
  styleUrls: ['./o-vowel.component.scss']
})
export class OVowelComponent implements OnInit, OnDestroy {
  leftLink = '/literacy/lettering/stage-1/spelling-vowel-letters/i-vowel';
  rightLink = '/literacy/lettering/stage-1/spelling-vowel-letters/u-vowel';
  correctAnswer = {
    q4: '1',
  };
  wrongAnswer = {
    q4: '0',
  };
  isCorrect = false;
  srcFile = '';

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
  ngOnDestroy(): void {
    this.srcFile = '';
  }

}
