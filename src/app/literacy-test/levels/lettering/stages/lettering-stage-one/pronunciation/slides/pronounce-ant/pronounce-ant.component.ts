import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-pronounce-ant',
  templateUrl: './pronounce-ant.component.html',
  styleUrls: ['./pronounce-ant.component.scss']
})
export class PronounceAntComponent implements OnInit {
  statement = "'a' as in 'ant'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-a';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-e';
  srcFile = '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two_pronounce-ant.mp3';
  correctAnswer = {
    q6: '1',
  };
  wrongAnswer = {
    q6: '0',
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
