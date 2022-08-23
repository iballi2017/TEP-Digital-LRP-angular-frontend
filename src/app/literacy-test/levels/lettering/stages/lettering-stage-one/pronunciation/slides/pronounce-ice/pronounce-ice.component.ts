import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-pronounce-ice',
  templateUrl: './pronounce-ice.component.html',
  styleUrls: ['./pronounce-ice.component.scss']
})
export class PronounceIceComponent implements OnInit {
  statement = "'a' as in 'ice'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-i';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-o';
  srcFile = '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_pronounce-egg.mp3';
  correctAnswer = {
    q8: '1',
  };
  wrongAnswer = {
    q8: '0',
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
