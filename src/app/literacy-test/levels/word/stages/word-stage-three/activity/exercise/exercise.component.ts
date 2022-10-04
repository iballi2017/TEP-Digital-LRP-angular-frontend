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
import { WordStageThreeService } from 'src/app/services/word/word-stage-three.service';
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
  resultLetterWords: any = {};
  actionAlphabets: any[] = [];
  selectedAlphabets: any[] = [];
  gameSessionId: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  gameLevel = GameLevel.WORD;
  isFinishedMessage!: string;
  stageNumber: number = 3;
  successMessage: any;
  //
  actionWords: any[] = [];
  newList: any[] = [];
  constructor(
    private _wordStageThreeService: WordStageThreeService,
    private _gameSvc: GameService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onGetActionAlphabets();
    this.onGetResultLetterWords();
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

  onGetActionAlphabets() {
    this.actionWords = this._wordStageThreeService.GetActionWords();
  }

  onGetResultLetterWords() {
    this.resultLetterWords = this._wordStageThreeService.GetresultLetterWords();
  }

  onPush(LetterItem: any) {
    console.log('LetterItem: ', LetterItem);
    let itemExists = false;
    let LetterItemItem = {
      id: LetterItem.id,
      name: LetterItem.name,
      type: LetterItem.type,
      isWellPlaced: LetterItem.isWellPlaced,
    };

    if (this.selectedAlphabets.length) {
      let isItemExist = this.selectedAlphabets.includes(LetterItem);
      if (isItemExist) {
        let x = [...this.selectedAlphabets];
        console.log(LetterItem, ': removed!!!');
        this.selectedAlphabets = x.filter(
          (item: any) => item.name != LetterItem.name
        );
      } else {
        if (this.selectedAlphabets.length > 3) {
          alert('Filled!!!');
          return;
        }
        this.selectedAlphabets.push(LetterItem);
        console.log('this.selectedAlphabets: ', this.selectedAlphabets);
        // this.onTestValues();
      }
    } else {
      if (this.selectedAlphabets.length > 1) {
        alert('Filled!!!');
        return;
      }
      this.selectedAlphabets.push(LetterItem);
      console.log('this.selectedAlphabets: ', this.selectedAlphabets);
      // this.onTestValues();
    }

    console.log('this.resultLetterWords: ', this.resultLetterWords);
  }

  onSelect(WordItem: any) {
    console.log('WordItem :', WordItem);
    // let resultItem = this.resultList[this.exerciseNumber];
    // let list = this.resultList[this.exerciseNumber]?.word;
    let resultItem = this.resultLetterWords;
    let list = this.resultLetterWords.word;
    console.log('list :', list);
    // let y = list.findIndex((i: any) => i.name == WordItem.name);
    // console.log('y :', y);
    // let y = list.find((i: any) => i.name == WordItem.name);
    // console.log('y :', y);

    let objIndex = list.findIndex((obj: any) => obj.name == WordItem.name);
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
        data: [this.resultLetterWords],
      };
      console.log('x: ', Payload);
      this.onSubmit(Payload);
    }
  }

  onReset() {
    console.log('resultLetterWords: ', this.resultLetterWords.word);
    let list = [...this.resultLetterWords.word];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
    });
    this.resultLetterWords.word = [...list];
  }

  onSubmit(Payload: any) {
    console.log('x: ', Payload);
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    this._wordStageThreeService.SubmitGameStageResult(Payload).subscribe({
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
              `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
