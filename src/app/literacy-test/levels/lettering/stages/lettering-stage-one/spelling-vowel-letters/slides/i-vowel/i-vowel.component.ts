import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-i-vowel',
  templateUrl: './i-vowel.component.html',
  styleUrls: ['./i-vowel.component.scss']
})
export class IVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/e-vowel';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/o-vowel';

  correctAnswer = {
    q3: 1,
  };
  wrongAnswer = {
    q3: 0,
  };


  constructor() { }

  ngOnInit(): void {
  }

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
