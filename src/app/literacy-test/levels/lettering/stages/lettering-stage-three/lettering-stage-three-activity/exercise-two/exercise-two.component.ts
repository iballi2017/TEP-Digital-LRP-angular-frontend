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

  audioFile =
    '../../../../../../../../assets/audio/mixkit-audience-light-applause-354.mp3';
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
    // this.letteringStageThreeExerciseOne$.subscribe({
    //   next: (stageOneResult: any) => {
    //     //  console.log('stageOneResult: ', stageOneResult);
    //     if (stageOneResult == undefined || stageOneResult == null) {
    //       this._router.navigate([
    //         '/literacy/lettering/stage-3/activity/exercise-one',
    //       ]);
    //     }
    //   },
    // });

    // if (!stageOneResult) {
    //   this._router.navigate(['/literacy/lettering/stage-3/activity']);
    // } else {
    //   return;
    // }
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this.gameSession$.subscribe({
      next: (data: any) => {
        //  console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  GetStageThreeExerciseOneResult() {
    this._stageThreeActivityExerciseOneSvc.LoadStageThreeExerciseOneResult();
    this.letteringStageThreeExerciseOne$.subscribe({
      next: (stageOneResult: any) => {
        //  console.log('stageOneResult: ', stageOneResult);
        this.stageOneResult = stageOneResult;
      },
    });
  }

  GetResultFourLetterWords() {
    this.resultFourLetterWords =
      this._stageThreeActivityExerciseTwoSvc.GetresultFourLetterWords();
    //  console.log(' this.resultFourLetterWords: ', this.resultFourLetterWords);
  }

  getActionLetters() {
    this.exerciseAlphabets =
      this._stageThreeActivityExerciseTwoSvc.GetActionAlphabets();
  }

  onReset() {
    console.log('reset: ', this.resultFourLetterWords);
    let list = [...this.resultFourLetterWords];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
    });
    this.resultFourLetterWords = [...list];
  }

  onPush(LetterItem: any) {
    //  console.log('LetterItem: ', LetterItem);
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
          alert('Filled!!!');
          return;
        }
        this.selectedAlphabets.push(LetterItem);
        this.onTestValues();
      }
    } else {
      if (this.selectedAlphabets.length > 1) {
        alert('Filled!!!');
        return;
      }
      this.selectedAlphabets.push(LetterItem);
      this.onTestValues();
    }
  }

  onTestValues() {
    for (let i in this.resultFourLetterWords) {
      //  console.log('i: ', this.resultFourLetterWords[i].word);
      //  console.log('i: ', this.selectedAlphabets);
      if (
        this.resultFourLetterWords[i].word[0]?.name ==
        this.selectedAlphabets[0]?.name
      ) {
        //  console.log('true: ', this.resultFourLetterWords[i]);
        this.selectedAlphabets[0].isWellPlaced = true;
      }

      if (this.selectedAlphabets.length != 0) {
        if (
          this.resultFourLetterWords[i].word[0]?.name !=
          this.selectedAlphabets[0]?.name
        ) {
          //  console.log('bad: ', this.resultFourLetterWords[i]);
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
        //  console.log('YES!!!');
        this.resultFourLetterWords[i].isDone = true;
        this.selectedAlphabets = [];
      } else {
        //  console.log('NO!!!');
      }
    }

    this.onSubmit();
  }

  onSubmit() {
    let complete = this.resultFourLetterWords.filter(
      (done: any) => done?.isDone == true
    );
    //  console.log('complete: ', complete);
    if (complete.length == 3) {
      // alert('Congratulations!!!');
      // this.onPlayApplause();
      // this._router.navigate([
      //   '/literacy/lettering/stage-3/activity/exercise-two',
      // ]);

      // this.ngRedux.dispatch({ type: ADD_LETTERING_STAGE_THREE_EXERCISE_ONE });
      const Payload: LetteringStageThreeExerciseAnswer = {
        session_id: this.gameSessionId,
        anwser: '2',
        data: complete,
      };
      //  console.log('Payload: ', Payload);
      let x = {
        ...Payload,
        data: Payload.data.concat(this.stageOneResult.data),
      };
      console.log('x: ', x);

      this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
      this._gameSvc.SubmitLetteringStageThreeResult(x).subscribe({
        next: (response: any) => {
          if (response) {
            console.log('response: ', response);
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
              payload: {
                result: Payload,
                apiResponse: response,
              },
            });
            console.log('response: ', response);
            this.successMessage = response?.message;
            console.log(Payload, ' submitted!');
            this.openSnackBar(response?.message);
            setTimeout(() => {
              this.successMessage = '';
              this.selectedAlphabets = [];
              this.onReset();
              this._router.navigate([
                '/literacy/stage-completion',
                this.stageNumber,
              ]);
              this._router.navigate([
                `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
              ]);

              // /literacy/word/stage-1/word-stage-one-splash
            }, 3000);

            // this._router.navigate([
            //   '/literacy/lettering/stage-3/activity/exercise-two',
            // ]);
          }
        },
        error: (err: any) => {
          if (err) {
            //  console.log('Error: ', err);
            this.ngRedux.dispatch({
              type: SUBMIT_GAME_STAGE_RESULT_ERROR,
              payload: err,
            });
          }
        },
      });
    }
  }

  onPlayApplause() {
    //  console.log('click');
    let audio = new Audio();
    audio.src = this.audioFile;
    audio.load();
    audio.play();
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
