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
import { BasicOperationsDivisionStageFourService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-four.service';
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
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  pageTitle: string = 'Can you do the following division problems provided';
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
  stageNumber: number = 4;
  isFinishedMessage!: string;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  gameLevel = GameLevel.BASIC_OPERATIONS_DIVISION;
  durationInSeconds = 10;
  Subscriptions: Subscription[] = [];

  constructor(
    private _basicOperationsDivisionStageFourSvc: BasicOperationsDivisionStageFourService,
    private _gameSvc: GameService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getActionNumbers();
    this.getResultNumbers();
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
    let numbersList =
      this._basicOperationsDivisionStageFourSvc.GetActionNumbers();
    this.actionWords = numbersList;
  }
  getResultNumbers() {
    let numbersList =
      this._basicOperationsDivisionStageFourSvc.GetResultNumbers();
    this.resultNumbers = numbersList;
    this.questionStatement =
      numbersList?.numbers[this.testLoopNumber]?.answer?.statement;
    //
    //   'resultNumbers: ',
    //   numbersList?.numbers[this.testLoopNumber]?.questionItems
    // );
    // this.answerNumber = numbersList?.numbers[this.testLoopNumber].answer;
    // this.questionResultNumbers =
    //   numbersList?.numbers[this.testLoopNumber]?.questionItems;
  }

  trackResultHint() {
    let x = this.resultNumbers.numbers[this.testLoopNumber];
    if (x.answer?.isWellPlaced == true) {
      x.isDone = true;
      const exerciseLength = this.resultNumbers.numbers;
      let e = exerciseLength.filter((i: any) => i.isDone == true);
      if (e.length == 1) {
        this.onSubmitSimpleExercise('1', false);
      }
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
    // console.log(this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == questionItems?.length) {
      this.resultNumbers.isComplete = true;
      this.onSubmit();
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

  

  onSubmitSimpleExercise(answer: string, isRoute: boolean) {
    const Payload: ExerciseAnswer = {
      session_id: this.gameSessionId,
      answer: answer,
      data: [this.resultNumbers],
    };
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription = this._basicOperationsDivisionStageFourSvc
      .SubmitGameStageResult(Payload)
      .subscribe({
        next: (response: any) => {
          if (response) {
            console.log('response: ', response);
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
              payload: Payload,
            });
            if (isRoute) {
              this.openSnackBar(response?.message);
              setTimeout(() => {
                this.isFinishedMessage = '';
                this.successMessage = '';
                this.onReset();
                this._router.navigate([
                  `/${GameType.NUMERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
                ]);
              }, 3000);
            }
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

  onSubmit() {
    this.onSubmitSimpleExercise('2', true);
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
