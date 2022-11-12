import { select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModifyStageArrayData } from 'src/app/models/classes/modify-stage-array-data';
import { GameLevelResultAndRatingService } from 'src/app/services/game-level-result-and-rating.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit, OnDestroy {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  @select((s) => s.gameLevelResultAndRating.gameLevelResultAndRating) gameLevelResultAndRating$: any;
  @select((s) => s.gameLevelResultAndRating.isLoading) isLoadingGameLevelResultAndRating$: any;
  gameSessionId: any;
  gameLevelResultAndRating: any;
  testStageStars!: any[];
  Subscriptions: Subscription[] = [];
  constructor(private _gameSvc: GameService,
    private _levelGameResultSvc: GameLevelResultAndRatingService) { }

  ngOnInit(): void {
    this._gameSvc.LoadGameSession();
    this.onGetGameSessionId();
  }

  onGetLevelGameResult(GameSessionId: string) {
    this._levelGameResultSvc.LoadWordGameResultAndRating(GameSessionId);
    let subscription = this.gameLevelResultAndRating$
      .subscribe({
        next: (response: any) => {
          if (response) {
            // console.log('LoadWord response>>>: ', response);
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
    this.testStageStars = x.modifyStageArray();
  }

  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
