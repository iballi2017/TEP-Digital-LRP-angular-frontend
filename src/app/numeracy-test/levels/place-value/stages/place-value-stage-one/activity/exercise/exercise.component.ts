import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameService } from 'src/app/services/game.service';
import { PlaceValueService } from 'src/app/services/place-value/place-value.service';
import { Place } from 'src/assets/data/numeracy.data/place-value.data';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
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
  constructor(
    private _placeValueSvc: PlaceValueService,
    private _gameSvc: GameService
  ) {}

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();
    this.trackResultHint();
  }

  trackResultHint() {
    console.log(
      '==>: ',
      this.resultNumbers.numbers[this.resultNumberIndex]?.list
    );
    let x = this.resultNumbers.numbers[this.resultNumberIndex];
    console.log('x: ', x);
    let y = x?.list.filter((el: any) => el.isWellPlaced == true);
    console.log('y: ', y);
    if (y?.length == x?.list?.length) {
      if (x) {
        x['isDone'] = true;
      }
    }
    let arrayList = this.resultNumbers.numbers[this.resultNumberIndex]?.list;
    console.log('arrayList: ', arrayList);
    console.log('this.resultNumbers: ', this.resultNumbers);
    arrayList?.forEach((element: any) => {
      // console.log('element: ', element);
      console.log('arrayList[this.itemIndex]: ', arrayList[this.itemIndex]);
      console.log('this.itemIndex: ', this.itemIndex);
      if (
        element.figure == arrayList[this.itemIndex]?.figure &&
        element?.place == arrayList[this.itemIndex]?.place
      ) {
        element.hint = true;
      } else {
        element.hint = false;
      }

      for (let i = 0; i < arrayList.length; i++) {}
      // if (element.figure != arrayList[this.itemIndex]?.figure) {
      //   element.hint = false;
      // }
    });

    this.onTestValues(this.resultNumbers?.numbers, this.resultNumbers);
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this.gameSession$.subscribe({
      next: (data: any) => {
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  getActionNumbers() {
    let numbersList = this._placeValueSvc.GetActionNumbers();
    console.log('numbersList: ', numbersList);
    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._placeValueSvc.GetresultNumbers();
    console.log('numbersList: ', numbersList);
    this.resultNumbers = numbersList;
  }

  onSelect(item: any) {
    console.log('item: ', item);
    let resultItem = this.resultNumbers;
    let list = this.resultNumbers?.numbers[this.resultNumberIndex]?.list;
    console.log('list :', list);
    list.forEach((_i: any) => {
      if (_i.place == item.name && _i.hint == true) {
        _i.isWellPlaced = true;
      }
    });
    let objIndex = list.findIndex((obj: any, index: any) => {
      console.log('index: ', index);
      console.log('obj: ', obj);
      // return obj.name == item.name;
      // return index == item.index && obj.hint == true;
      return obj.place == item.name && obj.hint == true;
      // return obj.place == item.name;
    });
    console.log('objIndex :', objIndex);
    if (objIndex == -1) {
      item.isWrongNumber = true;
      console.log('item: ', item);
    } else {
      item.isCorrectNumber = true;
    }
    //Log object to Console.
    console.log('Before update: ', list[objIndex]);
    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
      console.log('this.itemIndex: ', this.itemIndex);
      this.itemIndex++;
      console.log('this.itemIndex: ', this.itemIndex);
      this.trackResultHint();
    }
    //Log object to console again.
    console.log('After update: ', list[objIndex]);
    // this.resultList =  list;
    this.onTestInitialValues(list, resultItem);
  }

  onTestInitialValues(List: any, ResultItem: any) {
    console.log('onTest()');
    // console.log('ResultItem: ', ResultItem?.numbers[this.itemIndex]);
    console.log('ResultItem: ', ResultItem?.numbers[this.resultNumberIndex]);
    let completeInit = List.filter((done: any) => done?.isWellPlaced == true);

    console.log('completeInit: ', completeInit);
    // console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (completeInit.length == List?.length) {
      // ResultItem.isDone = true;
      setTimeout(() => {
        console.log('Intial value completed!!!');
        console.log(this.resultNumberIndex);
        this.resultNumberIndex += 1;
        this.itemIndex = 0;
        console.log(this.resultNumberIndex);
        this.trackResultHint();
        // this.onSubmit(Payload);
      }, 1500);
    }

    console.log('this.resultNumbers: ', this.resultNumbers);
  }

  onTestValues(List: any, ResultItem: any) {
    console.log('onTest()');
    let complete = List.filter((done: any) => done?.isDone == true);

    console.log('complete: ', complete);
    console.log('ResultItem: ', ResultItem);
    // console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == List?.length) {
      ResultItem.isComplete = true;
      console.log('completed!!!');
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [this.resultNumbers],
      };
      console.log('x: ', Payload);
      // this.onSubmit(Payload);
    }
  }

  onReset() {
    let list = [...this.resultNumbers.numbers];
    console.log('list: ', list);
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

  // onSubmit(Payload: any) {
  //   console.log('x: ', Payload);
  //   this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
  //   this._wordStageThreeService.SubmitGameStageResult(Payload).subscribe({
  //     next: (response: any) => {
  //       if (response) {
  //         console.log('response: ', response);
  //         this.ngRedux.dispatch({
  //           type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
  //           payload: Payload,
  //         });
  //         this.openSnackBar(response?.message);
  //         setTimeout(() => {
  //           this.isFinishedMessage = '';
  //           this.successMessage = '';
  //           this.onReset();
  //           // alert('completed!!!');
  //           this._router.navigate([
  //             `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
  //           ]);
  //         }, 3000);
  //       }
  //     },
  //     error: (err: any) => {
  //       if (err) {
  //         console.warn('Error: ', err);
  //         this.ngRedux.dispatch({
  //           type: SUBMIT_GAME_STAGE_RESULT_ERROR,
  //           payload: err?.error?.message,
  //         });
  //       }
  //     },
  //   });
  // }

  // openSnackBar(data: any) {
  //   this._snackBar.openFromComponent(SnackbarComponent, {
  //     duration: this.durationInSeconds * 1000,
  //     horizontalPosition: this.horizontalPosition,
  //     verticalPosition: this.verticalPosition,
  //     data: data,
  //   });
  // }
}
