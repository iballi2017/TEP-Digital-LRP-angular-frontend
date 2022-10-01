import { select } from '@angular-redux/store';
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
import { WordStageTwoService } from 'src/app/services/word/word-stage-two.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  resultLetterWords: any[] = [];
  actionWords: any[] = [];
  selectedAlphabets: any[] = [];
  gameSessionId: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  gameLevel = GameLevel.WORD;
  isFinishedMessage!: string;
  stageNumber: number = 2;
  successMessage: any;
  constructor(
    private _wordStageTwoSvc: WordStageTwoService,
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar,
    private _router: Router,
  ) {}

  ngOnInit(): void {
    this.onGetGameSessionId();
    this.onGetActionwords();
    this.onGetResultwords();
  }

  onGetActionwords() {
    this.actionWords = this._wordStageTwoSvc.GetActionwords();
    // let x = this._wordStageTwoSvc.GetActionwords();
    // let y = this._wordStageTwoSvc.GetActionwords();
    // for (var i = x.length; i-- > 1; ) {
    //   var j = Math.floor(Math.random() * i);
    //   var tmp = x[i];
    //   x[i] = x[j];
    //   x[j] = tmp;
    //   console.log('x[j]: ', x[j]);
    //   console.log('x[i]: ', x[i]);
    //   this.actionWords.push(x[i]);
    // }
    // console.log(' x: ', x);
    // console.log(' y: ', y);
    // console.log(' this.actionWords: ', this.actionWords);
  }

  onGetResultwords() {
    this.resultLetterWords = this._wordStageTwoSvc.GetResultwords();
    console.log(' this.resultLetterWords: ', this.resultLetterWords);
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

  onPush(LetterItem: any) {
    let LetterItemItem = {
      ...LetterItem,
      isWellPlaced: LetterItem.isWellPlaced,
    };
    console.log('LetterItemItem: ', LetterItemItem);
    console.log('resultLetterWords: ', this.resultLetterWords);
    //Find index of specific object using findIndex method.
    let objIndex = this.resultLetterWords.findIndex(
      (obj) => obj.name == LetterItemItem.name
    );

    //Log object to Console.
    console.log('Before update: ', this.resultLetterWords[objIndex]);

    //Update object's name property.
    if (this.resultLetterWords[objIndex]) {
      this.resultLetterWords[objIndex].isChecked = true;
    }

    //Log object to console again.
    console.log('After update: ', this.resultLetterWords[objIndex]);

    this.onGetResultwords();
    this.onSubmit();
  }

  onSubmit() {
    console.log('onSubmit: ');
    let complete = this.resultLetterWords.filter(
      (done: any) => done?.isChecked == true
    );

    console.log('complete: ', complete);

    if (complete.length == this.resultLetterWords?.length) {
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: complete,
      };
      console.log('x: ', Payload);
      this._wordStageTwoSvc.SubmitGameStageResult(Payload).subscribe({
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
