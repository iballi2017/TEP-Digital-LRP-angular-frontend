import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameType } from 'src/app/models/types/game-type';
import { GameService } from 'src/app/services/game.service';
import { WordStageTwoService } from 'src/app/services/word/word-stage-two.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IAppState } from 'src/redux/store';
import {
  SUBMIT_GAME_STAGE_RESULT,
  SUBMIT_GAME_STAGE_RESULT_ERROR,
  SUBMIT_GAME_STAGE_RESULT_SUCCESS,
} from 'src/redux/_game.store/game.actions';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  resultLetterWords: any[] = [];
  actionWords: any[] = [];
  selectedAlphabets: any[] = [];
  gameSessionId: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  gameLevel = GameLevel.WORD;
  isFinishedMessage!: string;
  stageNumber: number = 2;
  successMessage: any;
  Subscriptions: Subscription[] = [];
  audioFile = 'https://mainlandcode.com/lrpaudios/literacy/Word-stage-2.mp3';
  constructor(
    private _wordStageTwoSvc: WordStageTwoService,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.onGetGameSessionId();
    this.onGetActionwords();
    this.onGetResultwords();
  }

  onGetActionwords() {
    this.actionWords = this._wordStageTwoSvc.GetActionwords();
    // let x = this._wordStageTwoSvc.GetActionwords();
    // let y = this._wordStageTwoSvc.GetActionwords();
    // for (var i = x.length; i-- > 1; ) {
    //   var j = Math.floor(Math.random() * i);
    //   var tmp = x[i];
    //   x[i] = x[j];
    //   x[j] = tmp;
    //   this.actionWords.push(x[i]);
    // }
    //
  }

  onGetResultwords() {
    this.resultLetterWords = this._wordStageTwoSvc.GetResultwords();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    let subscription = this.gameSession$.subscribe({
      next: (data: any) => {
        this.gameSessionId = data?.session_id;
      },
    });
    this.Subscriptions.push(subscription)
  }

  onPush(LetterItem: any) {
    let LetterItemItem = {
      ...LetterItem,
      isWellPlaced: LetterItem.isWellPlaced,
    };

    //Find index of specific object using findIndex method.
    let objIndex = this.resultLetterWords.findIndex(
      (obj) => obj.name == LetterItemItem.name
    );

    //Log object to Console.
    //console.warn('Before update: ', this.resultLetterWords[objIndex]);

    //Update object's name property.
    if (this.resultLetterWords[objIndex]) {
      this.resultLetterWords[objIndex].isWellPlaced = true;
    }
    this.onGetResultwords();
    this.onSubmit();
  }

  onReset() {
    let list = [...this.resultLetterWords];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
    });
    this.resultLetterWords = [...list];
  }

  onSubmit() {
    let complete = this.resultLetterWords.filter(
      (done: any) => done?.isWellPlaced == true
    );

    if (complete.length == this.resultLetterWords?.length) {
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: complete,
      };
      this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
      let subscription = this._wordStageTwoSvc.SubmitGameStageResult(Payload).subscribe({
        next: (response: any) => {
          if (response) {
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
              payload: Payload,
            });
            this.openSnackBar(response?.message);
            setTimeout(() => {
              this.isFinishedMessage = '';
              this.successMessage = '';
              // alert('completed!!!');
              this.onReset();
              this._router.navigate([
                `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
              ]);
            }, 3000);
          }
        },
        error: (err: any) => {
          if (err) {
            // console.warn('Error: ', err);
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_ERROR,
              payload: err,
            });
          }
        },
      });
      this.Subscriptions.push(subscription)
    }
  }

  openSnackBar(data: any) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: data,
    });
  }


  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
