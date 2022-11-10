import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameResultRatingService } from 'src/app/services/game-result-rating.service';
import { GameService } from 'src/app/services/game.service';
import { LevelGameResultService } from 'src/app/services/level-game-result.service';

@Component({
  selector: 'app-lettering',
  templateUrl: './lettering.component.html',
  styleUrls: ['./lettering.component.scss'],
})
export class LetteringComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  testStageStars: any[] = [];
  letteringStages = [
    {
      id: 1,
      title: 'stage-1',
      rating: 3,
    },
    {
      id: 2,
      title: 'stage-2',
      rating: 2,
    },
    {
      id: 3,
      title: 'stage-3',
      rating: 5,
    },
    // {
    //   id: 4,
    //   title: 'stage-4',
    //   rating: 5,
    // },
  ];
  totalStarNumber: number = 5;
  gameSessionId: any;
  // url='/literacy/lettering/';
  // url = `${GameType.Literacy}/${GameLevel.LETTER}`
  constructor(
    private _gameResultRatingSvc: GameResultRatingService,
    private _gameSvc: GameService,
    private _levelGameResultSvc: LevelGameResultService
  ) {}

  ngOnInit(): void {
    // this.url = `${GameType.Literacy}/${GameLevel.LETTER}`;
    this.modifyStageArray();
    this._gameSvc.LoadGameSession();
    this.onGetGameSessionId();
  }

  onGetLevelGameResult(GameSessionId: string) {
    this._levelGameResultSvc
      .GetLetterLevelGameResultBySessionId(GameSessionId)
      .subscribe({
        next: (response: any) => {
          console.log('response?????????: ', response);
          if (response) {
            console.log('response>>>: ', response);
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error**: ', err);
          }
        },
      });
  }

  onGetGameSessionId() {
    this.gameSession$.subscribe({
      next: (data: any) => {
        this.gameSessionId = data?.session_id;
        // this.onGetUserGameResult(this.gameSessionId);
        this.onGetLevelGameResult(this.gameSessionId);
      },
    });
  }

  // onGetUserGameResult(GameSessionId: string) {
  //   this._gameResultRatingSvc.GetUserGameResult(GameSessionId).subscribe({
  //     next: (response: any) => {
  //       if (response) {
  //       }
  //     },
  //     error: (err: any) => {
  //       if (err) {
  //         console.warn('Error: ', err);
  //       }
  //     },
  //   });
  // }

  modifyStageArray() {
    this.letteringStages.forEach((stage: any) => {
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
  }
}
