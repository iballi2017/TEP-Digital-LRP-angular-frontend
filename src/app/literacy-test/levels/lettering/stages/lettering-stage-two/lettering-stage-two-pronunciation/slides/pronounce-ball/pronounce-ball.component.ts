import { Component, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';

@Component({
  selector: 'app-pronounce-ball',
  templateUrl: './pronounce-ball.component.html',
  styleUrls: ['./pronounce-ball.component.scss']
})
export class PronounceBallComponent implements OnInit {
  leftLink = '/literacy/lettering/stage-2/lettering-splash/fourth-screen';
  rightLink = '/literacy/lettering/stage-2/lettering-splash/fifth-screen';
  statement = "'a' as in 'ant'";
  srcFile = '';
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
