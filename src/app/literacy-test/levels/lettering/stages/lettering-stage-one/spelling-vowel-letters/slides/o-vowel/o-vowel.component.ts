import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-o-vowel',
  templateUrl: './o-vowel.component.html',
  styleUrls: ['./o-vowel.component.scss']
})
export class OVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/i-vowel';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/u-vowel';
  correctAnswer = {
    q4: 1,
  };
  wrongAnswer = {
    q4: 0,
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
