import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameType } from 'src/app/models/types/game-type';
import { GameService } from 'src/app/services/game.service';
import { NumberRecognitionTwoService } from 'src/app/services/number-recognition/number-recognition-two.service';
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
  pageTitle: string = 'can you identify the 2-digit numbers here';
  actionWords: any[] = [];
  resultNumbers: any;
  gameSessionId: any;
  stageNumber: number = 1;
  isFinishedMessage!: string;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  gameLevel = GameLevel.NUMBER_RECOGNITION_TWO;
  durationInSeconds = 10;
  constructor(
    private _numberRecognitionTwoSvc: NumberRecognitionTwoService,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this.gameSession$.subscribe({
      next: (data: any) => {
        this.gameSessionId = data?.session_id;
      },
    });
  }

  getActionNumbers() {
    let numbersList = this._numberRecognitionTwoSvc.GetActionNumbers();

    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._numberRecognitionTwoSvc.GetresultNumbers();

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
    this._numberRecognitionTwoSvc.SubmitGameStageResult(Payload).subscribe({
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
  }

  openSnackBar(data: any) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: data,
    });
  }
}
