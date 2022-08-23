import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-a-identity',
  templateUrl: './a-identity.component.html',
  styleUrls: ['./a-identity.component.scss']
})
export class AIdentityComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/identify-vowel-letters/introduction';
  rightLink = '/literacy/lettering/stage-1/identify-vowel-letters/identify-alphabet-e';
  srcFile = '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two_pronounce-ant.mp3';
  correctAnswer = {
    q11: '1',
  };
  wrongAnswer = {
    q11: '0',
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
