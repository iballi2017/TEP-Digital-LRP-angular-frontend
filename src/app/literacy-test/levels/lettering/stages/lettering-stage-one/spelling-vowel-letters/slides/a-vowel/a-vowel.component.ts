import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';
import { GameSessionData } from 'src/app/models/types/game';

@Component({
  selector: 'app-a-vowel',
  templateUrl: './a-vowel.component.html',
  styleUrls: ['./a-vowel.component.scss'],
})
export class AVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/lettering-splash/sixth-screen';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/e-vowel';
  correctAnswer = {
    q1: 1,
  };
  wrongAnswer = {
    q1: 0,
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
    // let x: any = sessionStorage.getItem(GameSessionData.result);
    // let y = JSON.parse(x);
    // let result = Object.assign(y, response);
    // console.log('result: ', result);
    // let z = JSON.stringify(result);
    // sessionStorage.setItem(GameSessionData.result, z);
  }
}
