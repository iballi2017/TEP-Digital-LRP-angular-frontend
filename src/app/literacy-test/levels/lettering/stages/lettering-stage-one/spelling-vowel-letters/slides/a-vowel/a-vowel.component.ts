import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameResult } from 'src/app/models/classes/game-result';
import { GameSessionData } from 'src/app/models/types/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-a-vowel',
  templateUrl: './a-vowel.component.html',
  styleUrls: ['./a-vowel.component.scss'],
})
export class AVowelComponent implements OnInit, OnDestroy {
  leftLink = '/literacy/lettering/stage-1/lettering-splash/sixth-screen';
  rightLink = '/literacy/lettering/stage-1/spelling-vowel-letters/e-vowel';
  correctAnswer = {
    q1: '1',
  };
  wrongAnswer = {
    q1: '0',
  };
  isCorrect = false;
  // srcFile =
  //   '../../../../../../../../../assets/audio/literacy_stage-1_lettering-splash_fifth-screen.mp3';
  srcFile = '';

  constructor(private _gameSvc: GameService) {}

  ngOnInit(): void {}

  onCorrect($event: any, isCorrect: boolean) {
    console.log('event: ', $event);
    console.log('isCorrect: ', isCorrect);
    this.onSubmitAnswer($event);
    this.isCorrect = isCorrect;
  }
  onWrong($event: any, isCorrect: boolean) {
    console.log('event: ', $event);
    this.onSubmitAnswer($event);
    this.isCorrect = isCorrect;
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

  ngOnDestroy(): void {
    this.srcFile = '';
  }
}
