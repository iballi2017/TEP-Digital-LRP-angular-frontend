import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameService } from 'src/app/services/game.service';
import { NumberRecognitionTwoService } from 'src/app/services/number-recognition/number-recognition-two.service';

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
  constructor(
    private _numberRecognitionTwoSvc: NumberRecognitionTwoService,
    private _gameSvc: GameService
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
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  getActionNumbers() {
    let numbersList = this._numberRecognitionTwoSvc.GetActionNumbers();
    console.log('numbersList: ', numbersList);
    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._numberRecognitionTwoSvc.GetresultNumbers();
    console.log('numbersList: ', numbersList);
    this.resultNumbers = numbersList;
  }

  onSelect(item: any) {
    console.log('item: ', item);
    let resultItem = this.resultNumbers;
    let list = this.resultNumbers.numbers;
    console.log('list :', list);
    let objIndex = list.findIndex((obj: any) => obj.name == item.name);
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
    }
    //Log object to console again.
    console.log('After update: ', list[objIndex]);
    // this.resultList =  list;
    this.onTestValues(list, resultItem);
  }

  onTestValues(List: any, ResultItem: any) {
    console.log('onTest()');
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    console.log('complete: ', complete);
    // console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
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
    console.log('resultNumbers: ', this.resultNumbers.numbers);
    let list = [...this.resultNumbers.numbers];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
    });
    this.resultNumbers.numbers = [...list];
    this.actionWords.forEach((a: any) => {
      console.log('a: ', a);
      a.isCorrectNumber = null;
      a.isWrongNumber = null;
      console.log('b: ', a);
    });
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
