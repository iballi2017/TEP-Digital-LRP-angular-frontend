import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameType } from 'src/app/models/types/game-type';
import { BasicOperationsDivisionStageTwoService } from 'src/app/services/basic-operations/division/basic-operations-division-stage-two.service';
import { GameService } from 'src/app/services/game.service';
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
  pageTitle: string = 'Can you do the following division problems provided';
  actionWords: any[] = [];
  gameSessionId: any;
  answerNumber!: any;
  uiExercise: any[] = [];
  resultNumbers: any = [];
  questionResultNumbers: any = [];
  totalStarNumber: number = 5;
  testLoopNumber: number = 0;
  //
  stageNumber: number = 2;
  isFinishedMessage!: string;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  gameLevel = GameLevel.BASIC_OPERATIONS_DIVISION;
  durationInSeconds = 10;
  Subscriptions: Subscription[] = [];

  constructor(
    private _basicOperationsDivisionStageTwoSvc: BasicOperationsDivisionStageTwoService,
    private _gameSvc: GameService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();

    this.modifyStageArray();
  }

  modifyStageArray() {
    this.questionResultNumbers.forEach((stage: any) => {

      let blueTriangleList: any[] = [];
      for (let i = 0; i < stage.figure; i++) {
        blueTriangleList.push({ isDone: true });
      }
      for (let i = 0; i < this.totalStarNumber - stage.rating; i++) {
        blueTriangleList.push('item');
      }
      let x: any = { ...stage, blueTriangleList: blueTriangleList };
      this.uiExercise.push(x);
    });

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
    let numbersList = this._basicOperationsDivisionStageTwoSvc.GetActionNumbers();

    this.actionWords = numbersList;
  }
  getresultNumbers() {
    // this.resultNumbers = numbersList;
    let numbersList = this._basicOperationsDivisionStageTwoSvc.GetResultNumbers();
    this.resultNumbers = numbersList;


    this.answerNumber =
      numbersList?.numbers[this.testLoopNumber].answer;
    this.questionResultNumbers =
      numbersList?.numbers[this.testLoopNumber]?.questionItems;
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
        this.uiExercise = [];
        this.getresultNumbers();
        this.modifyStageArray();
      }, 1200);
    }

    this.onTestValues();
  }

  onTestValues() {
    let questionItems = this.resultNumbers.numbers;
    let complete = questionItems.filter((done: any) => done?.isDone == true);
    if (complete.length == questionItems?.length) {
      this.resultNumbers.isComplete = true;
      this.onSubmit();
    }
  }

  onSelect(item: any) {
    // 
    let result = this.resultNumbers?.numbers[this.testLoopNumber];
    // 
    if (item.figure == result.answer.figure) {
      item.isCorrectNumber = true;
      result.answer.isWellPlaced = true;
      this.trackResultHint();
    }
    else {
      item.isWrongNumber = true;
      // 
    }
    // 
  }

  onReset() {
    this.resultNumbers?.numbers.forEach((element: any) => {
      element.isDone = false;
      element.answer.isWellPlaced = false;
    });
    this.testLoopNumber = 0;
    this.uiExercise = [];
    this.getresultNumbers();
    this.modifyStageArray();
  }


  onSubmitSimpleExercise(answer: string, isRoute: boolean) {
    const Payload: ExerciseAnswer = {
      session_id: this.gameSessionId,
      answer: answer,
      data: [this.resultNumbers],
    };
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription = this._basicOperationsDivisionStageTwoSvc
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


  ngOnDestroy(): void {
    this.Subscriptions.forEach((x) => {
      if (!x.closed) {
        x.unsubscribe();
      }
    });
  }
}
