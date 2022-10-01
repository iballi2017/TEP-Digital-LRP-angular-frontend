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
import { WordStageOneService } from 'src/app/services/word/word-stage-one.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IAppState } from 'src/redux/store';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
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
  constructor(
    private _wordStageOneService: WordStageOneService,
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
        //  console.log('YES!!!');
        this.resultLetterWords[i].isDone = true;
        this.selectedAlphabets = [];
      } else {
        //  console.log('NO!!!');
      }
    }

    this.onSubmit();
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
        if (this.selectedAlphabets.length > 1) {
          alert('Filled!!!');
          return;
        }
        this.selectedAlphabets.push(LetterItem);
        console.log('this.selectedAlphabets: ', this.selectedAlphabets);
        this.onTestValues();
      }
    } else {
      if (this.selectedAlphabets.length > 1) {
        alert('Filled!!!');
        return;
      }
      this.selectedAlphabets.push(LetterItem);
      console.log('this.selectedAlphabets: ', this.selectedAlphabets);
      this.onTestValues();
    }
  }

  onSubmit() {
    let complete = this.resultLetterWords.filter(
      (done: any) => done?.isDone == true
    );

    console.log('complete: ', complete);

    if (complete.length == 3) {
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        anwser: '1',
        data: complete,
      };
      console.log('x: ', Payload);
      this._wordStageOneService.SubmitGameStageResult(Payload).subscribe({
        next: (response: any) => {
          if (response) {
            console.log('response: ', response);
            this.openSnackBar(response?.message);
            setTimeout(() => {
              this.isFinishedMessage = '';
              this.successMessage = '';
              alert('completed!!!');
              this._router.navigate([
                `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
              ]);
            }, 6000);
          }
        },
        error: (err: any) => {
          if (err) {
            console.warn('Error: ', err);
          }
        },
      });
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
}
