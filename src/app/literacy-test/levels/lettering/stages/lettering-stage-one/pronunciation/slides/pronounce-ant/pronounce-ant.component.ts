import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-pronounce-ant',
  templateUrl: './pronounce-ant.component.html',
  styleUrls: ['./pronounce-ant.component.scss']
})
export class PronounceAntComponent implements OnInit {
  statement = "'a' as in 'ant'";
  leftLink = '/literacy/stage-1/lettering-splash-screen-two/say-alphabet-a';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two/alphabet-e';
  srcFile = '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two_pronounce-ant.mp3';
  correctAnswer = {
    q6: 1,
  };
  wrongAnswer = {
    q6: 0,
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
  }

}
