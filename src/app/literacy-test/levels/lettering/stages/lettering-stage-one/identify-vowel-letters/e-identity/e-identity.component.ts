import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-e-identity',
  templateUrl: './e-identity.component.html',
  styleUrls: ['./e-identity.component.scss']
})
export class EIdentityComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/identify-vowel-letters/identify-alphabet-a';
  rightLink = '/literacy/lettering/stage-1/identify-vowel-letters/identify-alphabet-i';
  srcFile = '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two_pronounce-ant.mp3';
  correctAnswer = {
    q12: '1',
  };
  wrongAnswer = {
    q12: '0',
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