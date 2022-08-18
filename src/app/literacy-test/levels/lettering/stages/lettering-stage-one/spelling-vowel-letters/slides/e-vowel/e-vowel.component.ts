import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-e-vowel',
  templateUrl: './e-vowel.component.html',
  styleUrls: ['./e-vowel.component.scss']
})
export class EVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/a-vowel';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/i-vowel';
  correctAnswer = {
    q2: 1,
  };
  wrongAnswer = {
    q2: 0,
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
