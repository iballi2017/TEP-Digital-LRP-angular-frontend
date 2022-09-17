import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Alphabet, AlphabetType } from 'src/app/models/types/alphabet';
import { GameService } from 'src/app/services/game.service';
import { StageTwoActivityService } from 'src/app/services/stage-two-activity.service';
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
  constructor(
    private _stageTwoActivitySvc: StageTwoActivityService,
    private _router: Router,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onGetAlphabet();
    this.onGetGameSessionId();
    this._gameSvc.LoadGameSession();
  }

  onGetGameSessionId() {
    this.gameSession$.subscribe({
      next: (data: any) => {
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  onGetAlphabet() {
    this.alphabets = this._stageTwoActivitySvc.GetAlphabetForStageTwo();
    this.vowels = this.alphabets.filter(
      (alphabet) => alphabet.type == AlphabetType.VOWEL && alphabet.isChecked
    );
    this.consonants = this.alphabets.filter(
      (alphabet) =>
        alphabet.type == AlphabetType.CONSONANT && alphabet.isChecked
    );
  }

  onSelected(Alphabet: any) {
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
        // console.log('item: ', item);
        if (item?.id == Alphabet?.id) {
          // console.log(item, ' exists');
          itemExists = true;
        }
      }
      if (!itemExists) {
        this.selectedAlphabets.push(AlphabetItem);
      }
    }

    if (this.consonants.length == 6) {
      this.onSumbit();
    }
  }

  onChecked() {
    this.onGetAlphabet();
  }

  onSumbit() {
    const Payload: LetteringStageOneAnswer = {
      session_id: this.gameSessionId,
      anwser: '1',
      result: this.selectedAlphabets,
    };
    console.log('Payload: ', Payload);

    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    this._gameSvc.SubmitLetteringStageTwoResult(Payload).subscribe({
      next: (response: any) => {
        if (response) {
          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
            payload: Payload,
          });
          console.log('response: ', response);
          this.successMessage = response?.message;

          console.log(Payload, ' submitted!');
          this.isFinishedMessage =
            'You have completed this level with ' +
            this.consonants?.length +
            ' wrong answers!';
          console.log('Payload: ', this.isFinishedMessage);
          this.openSnackBar(response?.message);

          setTimeout(() => {
            this.isFinishedMessage = '';
            this.successMessage = '';
            this.vowels = [];
            this.selectedAlphabets = [];
            this.consonants = [];
            alert('completed!!!');
            this._router.navigate(['/literacy/stage-completion']);
          }, 6000);
        }
      },
      error: (err: any) => {
        if (err) {
          console.log('Error: ', err);
          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_ERROR,
            payload: err,
          });
        }
      },
    });
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
}

export interface LetteringStageOneAnswer {
  session_id: string;
  anwser: string;
  result: any[];
}
