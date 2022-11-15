import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { NumberRecognitionOneService } from 'src/app/services/number-recognition/number-recognition-one.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IAppState } from 'src/redux/store';
import { SUBMIT_GAME_STAGE_RESULT, SUBMIT_GAME_STAGE_RESULT_ERROR, SUBMIT_GAME_STAGE_RESULT_SUCCESS } from 'src/redux/_game.store/game.actions';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  pageTitle: string = 'Can you identify the 1-digit numbers here';
  actionWords: any[] = [];
  resultNumbers: any;
  gameSessionId: any;
  stageNumber: number = 1;
  isFinishedMessage!: string;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  gameLevel = GameLevel.NUMBER_RECOGNITION_ONE;
  durationInSeconds = 10;
  Subscriptions: Subscription[] = [];


  constructor(
    private _numberRecognitionOneSvc: NumberRecognitionOneService,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();
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

  getActionNumbers() {
    let numbersList = this._numberRecognitionOneSvc.GetActionNumbers();

    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._numberRecognitionOneSvc.GetresultNumbers();

    this.resultNumbers = numbersList;
  }

  onSelect(item: any) {
    let resultItem = this.resultNumbers;
    let list = this.resultNumbers.numbers;

    let objIndex = list.findIndex((obj: any) => obj.name == item.name);

    if (objIndex == -1) {
      item.isWrongNumber = true;
    } else {
      item.isCorrectNumber = true;
    }
    //Log object to Console.

    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
    }
    //Log object to console again.

    // this.resultList =  list;
    this.onTestValues(list, resultItem);
  }

  onTestValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [this.resultNumbers],
      };

      this.onSubmit(Payload);
    }
  }

  onReset() {
    // console.warn('resultNumbers: ', this.resultNumbers.numbers);
    let list = [...this.resultNumbers.numbers];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
    });
    this.resultNumbers.numbers = [...list];
    this.actionWords.forEach((a: any) => {
      a.isCorrectNumber = null;
      a.isWrongNumber = null;
    });
  }

  onSubmit(Payload: any) {
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription = this._numberRecognitionOneSvc.SubmitGameStageResult(Payload).subscribe({
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
            this.onReset();
            this._router.navigate([
              `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
            ]);
          }, 3000);
        }
      },
      error: (err: any) => {
        if (err) {
          console.warn('Error: ', err);
          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_ERROR,
            payload: err?.error?.message,
          });
        }
      },
    });
    this.Subscriptions.push(subscription)
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
