import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/classes/modify-stage-array-data';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-lettering',
  templateUrl: './lettering.component.html',
  styleUrls: ['./lettering.component.scss'],
})
export class LetteringComponent implements OnInit, OnDestroy {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  @select((s) => s.gameLevelResultAndRating.gameLevelResultAndRating) gameLevelResultAndRating$: any;
  @select((s) => s.gameLevelResultAndRating.isLoading) isLoadingGameLevelResultAndRating$: any;
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
  gameLevelResultAndRating: any;
  // url='/literacy/lettering/';
  // url = `${GameType.Literacy}/${GameLevel.LETTER}`
  Subscriptions: Subscription[] = [];
  constructor(
    private _gameLevelResultAndRatingSvc: GameLevelResultAndRatingService,
    private _gameSvc: GameService,
  ) { }

  ngOnInit(): void {
    // this.url = `${GameType.Literacy}/${GameLevel.LETTER}`;
    this.modifyStageArray();
    this._gameSvc.LoadGameSession();
    this.onGetGameSessionId();
  }

  onGetLevelGameResult(GameSessionId: string) {
    this._gameLevelResultAndRatingSvc.LoadLetteringGameResultAndRating(GameSessionId);
    let subscription = this.gameLevelResultAndRating$
      .subscribe({
        next: (response: any) => {
          if (response) {
            console.log('LoadLettering response>>>: ', response);
            this.gameLevelResultAndRating = response;
            this.modifyStageArray();
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error**: ', err);
          }
        },
      });
    this.Subscriptions.push(subscription)
  }

  onGetGameSessionId() {
    let subscription = this.gameSession$.subscribe({
      next: (data: any) => {
        this.gameSessionId = data?.session_id;
        // this.onGetUserGameResult(this.gameSessionId);
        this.onGetLevelGameResult(this.gameSessionId);
      },
    });
    this.Subscriptions.push(subscription)
  }

  modifyStageArray() {
    let x = new ModifyStageArrayData(this.gameLevelResultAndRating)
    this.testStageStars = x.modifyStageArray()
    // if (this.gameLevelResultAndRating) {
    //   this.testStageStars = []
    //   this.gameLevelResultAndRating.forEach((stage: any) => {
    //     let starArray: any[] = [];
    //     for (let i = 0; i < stage.rating; i++) {
    //       starArray.push({ isDone: true });
    //     }
    //     for (let i = 0; i < this.totalStarNumber - stage.rating; i++) {
    //       starArray.push({ isDone: false });
    //     }
    //     let x: any = { ...stage, starArray: starArray };
    //     this.testStageStars.push(x);
    //     console.log("this.testStageStars: ", this.testStageStars)
    //   });
    // }
  }



  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
