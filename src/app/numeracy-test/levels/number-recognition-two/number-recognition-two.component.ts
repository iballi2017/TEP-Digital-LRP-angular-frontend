import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { GameResultRatingService } from 'src/app/services/game-result-rating.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-number-recognition-two',
  templateUrl: './number-recognition-two.component.html',
  styleUrls: ['./number-recognition-two.component.scss']
})
export class NumberRecognitionTwoComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  testStageStars: any[] = [];
  numberingStages = [
    {
      id: 1,
      title: 'stage-1',
      rating: 3,
    }
  ];
  totalStarNumber: number = 5;
  gameSessionId: any;
  // url='/literacy/lettering/';
  // url = `${GameType.Literacy}/${GameLevel.LETTER}`
  constructor(
    private _gameResultRatingSvc: GameResultRatingService,
    private _gameSvc: GameService
  ) {}

  ngOnInit(): void {
    // this.url = `${GameType.Literacy}/${GameLevel.LETTER}`;
    this.modifyStageArray();
    this._gameSvc.LoadGameSession();
    this.onGetGameSessionId();
  }

  onGetGameSessionId() {
    this.gameSession$.subscribe({
      next: (data: any) => {
        
        this.gameSessionId = data?.session_id;
        this.onGetUserGameResult(this.gameSessionId);
      },
    });
  }

  onGetUserGameResult(GameSessionId: string) {
    this._gameResultRatingSvc.GetUserGameResult(GameSessionId).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('GetUserGameResult response: ', response);
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
        }
      },
    });
  }

  modifyStageArray() {
    this.numberingStages.forEach((stage: any) => {
      // 
      let starArray: any[] = [];
      for (let i = 0; i < stage.rating; i++) {
        starArray.push({ isDone: true });
      }
      for (let i = 0; i < this.totalStarNumber - stage.rating; i++) {
        starArray.push({ isDone: false });
      }
      let x: any = { ...stage, starArray: starArray };
      this.testStageStars.push(x);
    });
    // console.log('testStageStars: ', this.testStageStars);
  }
}
