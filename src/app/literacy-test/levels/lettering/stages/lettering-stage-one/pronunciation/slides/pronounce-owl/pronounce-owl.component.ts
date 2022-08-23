import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-pronounce-owl',
  templateUrl: './pronounce-owl.component.html',
  styleUrls: ['./pronounce-owl.component.scss'],
})
export class PronounceOwlComponent implements OnInit {
  statement = "'a' as in 'owl'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-o';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-u';
  srcFile = '';
  // '../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_pronounce-egg.mp3';
  correctAnswer = {
    q9: '1',
  };
  wrongAnswer = {
    q9: '0',
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
