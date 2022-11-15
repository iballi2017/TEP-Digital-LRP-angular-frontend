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
import { WordStageOneService } from 'src/app/services/word/word-stage-one.service';
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
  resultLetterWords: any[] = [];
  actionAlphabets: any[] = [];
  selectedAlphabets: any[] = [];
  gameSessionId: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  isFinishedMessage!: string;
  successMessage: any;
  stageNumber: number = 1;
  gameLevel = GameLevel.WORD;
  Subscriptions: Subscription[] = [];
  constructor(
    private _wordStageOneService: WordStageOneService,
    private _gameSvc: GameService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.onGetActionAlphabets();
    this.onGetResultLetterWords();
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

  onGetActionAlphabets() {
    this.actionAlphabets = this._wordStageOneService.GetActionAlphabets();
  }

  onGetResultLetterWords() {
    this.resultLetterWords = this._wordStageOneService.GetresultLetterWords();
  }

  onTestValues() {
    for (let i in this.resultLetterWords) {
      //  console.log('i: ', this.resultLetterWords[i].word);
      //  console.log('i: ', this.selectedAlphabets);
      if (
        this.resultLetterWords[i].word[0]?.name ==
        this.selectedAlphabets[0]?.name
      ) {
        //  console.log('true: ', this.resultLetterWords[i]);
        this.selectedAlphabets[0].isWellPlaced = true;
      }

      if (this.selectedAlphabets.length != 0) {
        if (
          this.resultLetterWords[i].word[0]?.name !=
          this.selectedAlphabets[0]?.name
        ) {
          //  console.log('bad: ', this.resultLetterWords[i]);
        }
      }
      if (
        this.resultLetterWords[i].word[1]?.name ==
        this.selectedAlphabets[1]?.name
      ) {
        this.resultLetterWords[i].isWellPlaced = true;
      }
      if (
        this.resultLetterWords[i].word[0]?.name ==
        this.selectedAlphabets[0]?.name &&
        this.resultLetterWords[i].word[1]?.name ==
        this.selectedAlphabets[1]?.name
      ) {
        //  
        this.resultLetterWords[i].isDone = true;
        this.selectedAlphabets = [];
      } else {
        //  
      }
    }

    this.onSubmit();
  }

  onPush(LetterItem: any) {
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

        this.selectedAlphabets = x.filter(
          (item: any) => item.name != LetterItem.name
        );
      } else {
        if (this.selectedAlphabets.length > 1) {

          return;
        }
        this.selectedAlphabets.push(LetterItem);

        this.onTestValues();
      }
    } else {
      if (this.selectedAlphabets.length > 1) {

        return;
      }
      this.selectedAlphabets.push(LetterItem);

      this.onTestValues();
    }
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
      (done: any) => done?.isDone == true
    );



    if (complete.length == 3) {
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: complete,
      };

      this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
      let subscription = this._wordStageOneService.SubmitGameStageResult(Payload).subscribe({
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
            }, 2000);
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error: ', err);
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
