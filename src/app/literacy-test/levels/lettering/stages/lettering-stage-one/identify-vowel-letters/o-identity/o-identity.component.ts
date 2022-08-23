import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-o-identity',
  templateUrl: './o-identity.component.html',
  styleUrls: ['./o-identity.component.scss']
})
export class OIdentityComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-1/identify-vowel-letters/identify-alphabet-i';
  rightLink = '/literacy/lettering/stage-1/identify-vowel-letters/identify-alphabet-u';
  srcFile =
    '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two_pronounce-ant.mp3';
  correctAnswer = {
    q14: '1',
  };
  wrongAnswer = {
    q14: '0',
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
