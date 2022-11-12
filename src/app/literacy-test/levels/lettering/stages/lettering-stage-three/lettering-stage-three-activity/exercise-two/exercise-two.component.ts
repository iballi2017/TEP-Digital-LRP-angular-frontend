import { AfterContentChecked, Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alphabet, AlphabetType } from 'src/app/models/types/alphabet';
import { StageThreeActivityExerciseTwoService } from 'src/app/services/stage-three-activity-exercise-two.service';
import { StageThreeActivityExerciseOneService } from 'src/app/services/stage-three-activity-exercise-one.service';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from 'src/redux/store';
import { LetteringStageThreeExerciseAnswer } from '../exercise-one/exercise-one.component';
import { GameService } from 'src/app/services/game.service';
import {
  SUBMIT_GAME_STAGE_RESULT,
  SUBMIT_GAME_STAGE_RESULT_ERROR,
  SUBMIT_GAME_STAGE_RESULT_SUCCESS,
} from 'src/redux/_game.store/game.actions';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { GameType } from 'src/app/models/types/game-type';
import { GameLevel } from 'src/app/models/types/game-level';

@Component({
  selector: 'app-exercise-two',
  templateUrl: './exercise-two.component.html',
  styleUrls: ['./exercise-two.component.scss'],
})
export class ExerciseTwoComponent implements OnInit, AfterContentChecked {
  @select((s) => s.game.letteringStageThreeExerciseOne)
  letteringStageThreeExerciseOne$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  @select((s) => s.game.gameSession)
  gameSession$: any;
  alphabets!: Alphabet[];
  consonant = AlphabetType.CONSONANT;
  inputDate: any[] = [];
  selectedAlphabets: any[] = [];
  exerciseAlphabets: any[] = [];
  resultFourLetterWords: any[] = [];

  stageOneResult: any;
  gameSessionId: any;
  stageNumber: number = 3;
  successMessage!: string;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  gameLevel = GameLevel.LETTER;

  constructor(
    private _gameSvc: GameService,
    private _stageThreeActivityExerciseTwoSvc: StageThreeActivityExerciseTwoService,
    private _stageThreeActivityExerciseOneSvc: StageThreeActivityExerciseOneService,
    private _router: Router,
    private _stageThreeActivitySvc: StageThreeActivityExerciseOneService,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.GetResultFourLetterWords();
    this.getActionLetters();
    this.onGetGameSessionId();
    // this.GetStageThreeExerciseOneResult();
  }

  ngAfterContentChecked(): void {
    this.GetStageThreeExerciseOneResult();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this.gameSession$.subscribe({
      next: (data: any) => {
        //
        this.gameSessionId = data?.session_id;
      },
    });
  }

  GetStageThreeExerciseOneResult() {
    this._stageThreeActivityExerciseOneSvc.LoadStageThreeExerciseOneResult();
    this.letteringStageThreeExerciseOne$.subscribe({
      next: (stageOneResult: any) => {
        this.stageOneResult = stageOneResult;
      },
    });
  }

  GetResultFourLetterWords() {
    this.resultFourLetterWords =
      this._stageThreeActivityExerciseTwoSvc.GetresultFourLetterWords();
  }

  getActionLetters() {
    this.exerciseAlphabets =
      this._stageThreeActivityExerciseTwoSvc.GetActionAlphabets();
  }

  onReset() {
    let list = [...this.resultFourLetterWords];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
    });
    this.resultFourLetterWords = [...list];
    this.selectedAlphabets = []
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

  onTestValues() {
    for (let i in this.resultFourLetterWords) {
      if (
        this.resultFourLetterWords[i].word[0]?.name ==
        this.selectedAlphabets[0]?.name
      ) {
        this.selectedAlphabets[0].isWellPlaced = true;
      }

      if (this.selectedAlphabets.length != 0) {
        if (
          this.resultFourLetterWords[i].word[0]?.name !=
          this.selectedAlphabets[0]?.name
        ) {
        }
      }
      if (
        this.resultFourLetterWords[i].word[1]?.name ==
        this.selectedAlphabets[1]?.name
      ) {
        this.resultFourLetterWords[i].isWellPlaced = true;
      }
      if (
        this.resultFourLetterWords[i].word[0]?.name ==
          this.selectedAlphabets[0]?.name &&
        this.resultFourLetterWords[i].word[1]?.name ==
          this.selectedAlphabets[1]?.name
      ) {
        this.resultFourLetterWords[i].isDone = true;
        this.selectedAlphabets = [];
      } else {
      }
    }

    this.onSubmit();
  }

  onSubmit() {
    let complete = this.resultFourLetterWords.filter(
      (done: any) => done?.isDone == true
    );
    if (complete.length == 3) {
      const Payload: LetteringStageThreeExerciseAnswer = {
        session_id: this.gameSessionId,
        anwser: '2',
        data: complete,
      };
      //
      let x = {
        ...Payload,
        data: Payload.data.concat(this.stageOneResult.data),
      };
      this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
      this._gameSvc.SubmitLetteringStageThreeResult(x).subscribe({
        next: (response: any) => {
          if (response) {
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
              payload: {
                result: Payload,
                apiResponse: response,
              },
            });

            this.successMessage = response?.message;
            this.openSnackBar(response?.message);
            setTimeout(() => {
              this.successMessage = '';
              this.selectedAlphabets = [];
              this.onReset();
              // this._router.navigate([
              //   '/literacy/stage-completion',
              //   this.stageNumber,
              // ]);
              this._router.navigate([
                `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
                // `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
              ]);
            }, 3000);
          }
        },
        error: (err: any) => {
          if (err) {
            //  console.error('Error: ', err);
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_ERROR,
              payload: err,
            });
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
