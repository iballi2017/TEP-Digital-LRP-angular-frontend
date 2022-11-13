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
import { BasicOperationsSubtractionStageOneService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-one.service';
import { BasicOperationsSubtractionStageThreeService } from 'src/app/services/basic-operations/subtraction/basic-operations-subtraction-stage-three.service';
import { GameService } from 'src/app/services/game.service';
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
export class ExerciseComponent implements OnInit, OnDestroy {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  actionWords: any[] = [];
  gameSessionId: any;
  totalStarNumber: number = 5;
  resultNumbers: any = [];
  questionResultNumbers: any = [];
  answerNumber!: any;
  testLoopNumber: number = 0;
  itemIndex: number = 0;
  questionStatement!: string;
  //
  stageNumber: number = 3;
  isFinishedMessage!: string;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  gameLevel = GameLevel.BASIC_OPERATIONS_SUBTRACTION;
  durationInSeconds = 10;
  Subscriptions: Subscription[] = [];

  constructor(
    private _basicOperationsSubtractionStageThreeSvc: BasicOperationsSubtractionStageThreeService,
    private _gameSvc: GameService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getActionNumbers();
    this.getResultNumbers();
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
    let numbersList =
      this._basicOperationsSubtractionStageThreeSvc.GetActionNumbers();

    this.actionWords = numbersList;
  }
  getResultNumbers() {
    let numbersList =
      this._basicOperationsSubtractionStageThreeSvc.GetResultNumbers();
    this.resultNumbers = numbersList;
    this.questionStatement =
      numbersList?.numbers[this.testLoopNumber]?.answer?.statement;
    // this.answerNumber = numbersList?.numbers[this.testLoopNumber].answer;
    // this.questionResultNumbers =
    //   numbersList?.numbers[this.testLoopNumber]?.questionItems;
  }

  trackResultHint() {
    let x = this.resultNumbers.numbers[this.testLoopNumber];

    if (x.answer?.isWellPlaced == true) {
      x.isDone = true;
    }
    this.textExercise();
  }

  textExercise() {
    let questionItems = this.resultNumbers.numbers;

    let done = questionItems.filter((i: any) => i.isDone == true);

    if (done.length < questionItems.length) {
      this.testLoopNumber++;
      setTimeout(() => {
        this.getResultNumbers();
      }, 1200);
    }

    this.onTestValues();
  }

  onTestValues() {
    let questionItems = this.resultNumbers.numbers;

    let complete = questionItems.filter((done: any) => done?.isDone == true);

    if (complete.length == questionItems?.length) {
      this.resultNumbers.isComplete = true;

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [this.resultNumbers],
      };

      this.onSubmit(Payload);
    }
  }

  onSelect(item: any) {
    let result = this.resultNumbers?.numbers[this.testLoopNumber];

    if (item.figure == result.answer.figure) {
      item.isCorrectNumber = true;
      result.answer.isWellPlaced = true;
      this.trackResultHint();
    } else {
      item.isWrongNumber = true;
      //
    }
  }

  onReset() {
    this.resultNumbers?.numbers.forEach((element: any) => {
      element.isDone = false;
      element.answer.isWellPlaced = false;
    });
    this.testLoopNumber = 0;
    this.getResultNumbers();
  }

  onSubmit(Payload: any) {
    console.log('Payload: ', Payload);
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription = this._basicOperationsSubtractionStageThreeSvc
      .SubmitGameStageResult(Payload)
      .subscribe({
        next: (response: any) => {
          if (response) {
            console.log('response: ', response);
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
              payload: Payload,
            });
            this.openSnackBar(response?.message);
            setTimeout(() => {
              this.isFinishedMessage = '';
              this.successMessage = '';
              this.onReset();
              // alert('completed!!!');
              this._router.navigate([
                `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
