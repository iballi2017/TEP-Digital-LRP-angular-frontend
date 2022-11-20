import { NgRedux, select } from '@angular-redux/store';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Alphabet, AlphabetType } from 'src/app/models/types/alphabet';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameType } from 'src/app/models/types/game-type';
import {
  GameService,
  LetteringStageOneAnswer,
} from 'src/app/services/game.service';
import { StageOneActivityService } from 'src/app/services/stage-one-activity.service';
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
  title = 'Identify vowel letters among the alphabets';
  alphabets!: Alphabet[];
  vowel = AlphabetType.VOWEL;
  consonant = AlphabetType.CONSONANT;
  vowels!: Alphabet[];
  selectedAlphabets: any[] = [];
  consonants!: Alphabet[];
  isFinishedMessage!: string;
  gameSessionId: any;
  successMessage: any;
  durationInSeconds = 10;
  stageNumber: number = 1;
  gameLevel = GameLevel.LETTER;
  Subscriptions: Subscription[] = [];
  audioFile = '../../../../../../../../assets/audio-files/WhatsApp Audio 2022-11-17 at 7.15.10 AM.mpeg'
  constructor(
    private _stageOneActivitySvc: StageOneActivityService,
    private _router: Router,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.onGetAlphabet();
    this.onGetGameSessionId();
    this._gameSvc.LoadGameSession();
  }

  onGetGameSessionId() {
    let subscription = this.gameSession$.subscribe({
      next: (data: any) => {
        this.gameSessionId = data?.session_id;
      },
    });
    this.Subscriptions.push(subscription)
  }

  onGetAlphabet() {
    // this.alphabets = this._stageOneActivitySvc.GetAlphabet();
    const l = this._stageOneActivitySvc.GetAlphabetList();
    this.alphabets = Object.assign([], l);
    this.vowels = this.alphabets.filter(
      (alphabet) => alphabet.type == AlphabetType.VOWEL && alphabet.isChecked
    );
    this.consonants = this.alphabets.filter(
      (alphabet) =>
        alphabet.type == AlphabetType.CONSONANT && alphabet.isChecked
    );
  }

  onReset() {
    // alert($event)
    let list = [...this.alphabets];
    list.forEach((item: any) => {
      item.isChecked = false;
    });
    this.alphabets = [...list];
  }

  onSelected(Alphabet: any) {
    this.onGetAlphabet();
    let itemExists = false;
    let AlphabetItem = {
      id: Alphabet.id,
      name: Alphabet.name,
      type: Alphabet.type,
    };
    if (!this.selectedAlphabets.length) {
      this.selectedAlphabets.push(AlphabetItem);
    } else {
      for (let item of this.selectedAlphabets) {
        // 
        if (item?.name == Alphabet?.name) {
          itemExists = true;
        }
      }
      if (!itemExists) {
        this.selectedAlphabets.push(AlphabetItem);
      }
    }

    if (this.vowels.length > 4) {
      this.onSubmit();
    }
  }

  onSubmit() {
    const Payload: LetteringStageOneAnswer = {
      session_id: this.gameSessionId,
      answer: '1',
      data: [...this.selectedAlphabets],
    };
    console.log("Payload: ", Payload)

    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription = this._gameSvc.SubmitLetteringStageOneResult(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
            payload: Payload,
          });

          this.successMessage = response?.message;
          this.isFinishedMessage =
            'You have completed this level with ' +
            this.consonants?.length +
            ' wrong answers!';
          this.openSnackBar(response?.message);

          setTimeout(() => {
            this.isFinishedMessage = '';
            this.successMessage = '';
            this.vowels = [];
            this.selectedAlphabets = [];
            this.consonants = [];
            this.onReset();
            this._router.navigate([
              `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
            ]);
          }, 3000);
        }
      },
      error: (err: any) => {
        if (err) {
          console.error('Error: ', err);
          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_ERROR,
            payload: err,
          });
        }
      },
    });
    this.Subscriptions.push(subscription)
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
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

// export interface LetteringStageOneAnswer {
//   session_id: string;
//   answer: string;
//   result: any[];
// }
