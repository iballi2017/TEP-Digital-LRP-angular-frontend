import { NgRedux, select } from '@angular-redux/store';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameType } from 'src/app/models/types/game-type';
import { GameService } from 'src/app/services/game.service';
import { PlaceValueService } from 'src/app/services/place-value/place-value.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { Place } from 'src/assets/data/numeracy.data/place-value.data';
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
  pageTitle: string = 'Arrange each number into the place value table';
  actionWords: any[] = [];
  resultNumbers: any;
  gameSessionId: any;
  resultNumberIndex: number = 0;
  itemIndex: number = 0;
  Hundred = Place.HUNDRED;
  Tens = Place.TENS;
  Unit = Place.UNIT;
  stageNumber: number = 1;
  isFinishedMessage!: string;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  gameLevel = GameLevel.PLACE_VALUE;
  durationInSeconds = 10;
  Subscriptions: Subscription[] = [];
  constructor(
    private _placeValueSvc: PlaceValueService,
    private _gameSvc: GameService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();
    this.trackResultHint();
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
    let numbersList = this._placeValueSvc.GetActionNumbers();

    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._placeValueSvc.GetresultNumbers();

    this.resultNumbers = numbersList;
  }


  onSelect(item: any) {
    let resultItem = this.resultNumbers;
    let list = this.resultNumbers?.numbers[this.resultNumberIndex]?.list;

    list.forEach((_i: any) => {
      if (_i.place == item.name && _i.hint == true) {
        _i.isWellPlaced = true;
      }
    });
    let objIndex = list.findIndex((obj: any, index: any) => {
      // return obj.name == item.name;
      // return index == item.index && obj.hint == true;
      return obj.place == item.name && obj.hint == true;
      // return obj.place == item.name;
    });

    if (objIndex == -1) {
      item.isWrongNumber = true;
    } else {
      item.isCorrectNumber = true;
    }
    //Log object to Console.

    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
      console.log("this.itemIndex: ", this.itemIndex)
      this.itemIndex++;
      console.log("this.itemIndex: ", this.itemIndex)

      this.trackResultHint();
    }
    //Log object to console again.

    // this.resultList =  list;
    this.onTestInitialValues(list, resultItem);
  }



  trackResultHint() {
    let x = this.resultNumbers.numbers[this.resultNumberIndex];

    let y = x?.list.filter((el: any) => el.isWellPlaced == true);
    y?.length == x?.list?.length
    console.log("y?.length): ", y?.length)
    console.log("x?.list?.length): ", x?.list?.length)
    if (y?.length == x?.list?.length) {
      if (x) {
        x['isDone'] = true;
        switch (x?.list?.length) {
          case 1:
            this.onSubmitSimpleExercise('1', false);
            break;

          case 3:
            this.onSubmitSimpleExercise('2', false);

            break;

          default:
            break;
        }
      }
    }
    let arrayList = this.resultNumbers.numbers[this.resultNumberIndex]?.list;

    arrayList?.forEach((element: any) => {
      // console.log('element: ', element);

      if (
        element.figure == arrayList[this.itemIndex]?.figure &&
        element?.place == arrayList[this.itemIndex]?.place
      ) {
        element.hint = true;
      } else {
        element.hint = false;
      }

      for (let i = 0; i < arrayList.length; i++) { }
      // if (element.figure != arrayList[this.itemIndex]?.figure) {
      //   element.hint = false;
      // }
    });

    this.onTestValues(this.resultNumbers?.numbers, this.resultNumbers);
  }


  onTestInitialValues(List: any, ResultItem: any) {
    let completeInit = List.filter((done: any) => done?.isWellPlaced == true);

    if (completeInit.length == List?.length) {
      // ResultItem.isDone = true;
      setTimeout(() => {
        this.resultNumberIndex += 1;
        this.itemIndex = 0;
        this.trackResultHint();
        // this.onSubmit(Payload);
      }, 1500);
    }
  }

  onTestValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isDone == true);
    if (complete.length == List?.length) {
      ResultItem.isComplete = true;
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '3',
        data: [this.resultNumbers],
      };

      this.onSubmit(Payload);
    }
  }

  onSubmitSimpleExercise(answer: string, isRoute: boolean) {
    const Payload: ExerciseAnswer = {
      session_id: this.gameSessionId,
      answer: answer,
      data: [this.resultNumbers],
    };
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription1 = this._placeValueSvc.SubmitGameStageResult(Payload).subscribe({
      next: (response: any) => {
        if (response) {
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
                `/${GameType.NUMERACY}/level-completion/${this.gameLevel}`
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
    this.Subscriptions.push(subscription1)
  }

  onReset() {
    let list = [...this.resultNumbers.numbers];

    list.forEach((item: any) => {
      item.isDone = false;
      item.list.forEach((element: any) => {
        element.isWellPlaced = false;
      });
    });
    this.resultNumberIndex = 0;
    this.itemIndex = 0;
    this.trackResultHint();
  }

  onSubmit(Payload: any) {
    this.onSubmitSimpleExercise('3', true);
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
