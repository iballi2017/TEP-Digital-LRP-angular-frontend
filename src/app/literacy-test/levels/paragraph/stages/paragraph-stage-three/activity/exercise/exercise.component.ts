import { NgRedux, select } from '@angular-redux/store';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameType } from 'src/app/models/types/game-type';
import { GameService } from 'src/app/services/game.service';
import { ParagraphStageThreeService } from 'src/app/services/paragraph/paragraph-stage-three.service';
import { ParagraphStageTwoService } from 'src/app/services/paragraph/paragraph-stage-two.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IAppState } from 'src/redux/store';
import { SUBMIT_GAME_STAGE_RESULT, SUBMIT_GAME_STAGE_RESULT_ERROR, SUBMIT_GAME_STAGE_RESULT_SUCCESS } from 'src/redux/_game.store/game.actions';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, OnDestroy {
  @select((s) => s.SpeechTexts.speechTexts) speechTexts$: any;
  @select((s) => s.SpeechTexts.isLoading) speechTextsIsLoading$: any;
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  gameSessionId: any;
  resultTexts = '';
  resultTextList: any[] = [];
  textPosition = 0;
  speechText!: string;
  isCorrect = false;
  isFinishedMessage!: string;
  stageNumber: number = 3;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  gameLevel = GameLevel.PARAGRAPH;
  Subscriptions: Subscription[] = [];
  constructor(
    public _paragraphStageThreeSvc: ParagraphStageThreeService,
    private cdr: ChangeDetectorRef,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private ngRedux: NgRedux<IAppState>,
    private _gameSvc: GameService
  ) {
    this._paragraphStageThreeSvc?.init();
    this.speechText = this._paragraphStageThreeSvc.text;
  }

  ngOnInit(): void {
    this.GetExerciseTexts();
    // this._paragraphStageThreeSvc?.init();
    // this.speechText = this._paragraphStageThreeSvc.text;
    // let x = this._paragraphStageThreeSvc.GetVoiceText();
    // 
    this.cdr.detectChanges();
    this.onTestTexts();
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

  GetExerciseTexts() {
    this.resultTextList = this._paragraphStageThreeSvc.GetExerciseTexts();
    console.log("this.resultTextList: ", this.resultTextList)
  }
  onTestTexts() {
    this.speechTexts$.subscribe({
      next: (response: any) => {
        if (response) {
          console.log("response: ", response)

          let speechText = response.replace(/\s/g, '');
          let objIndex = this.resultTextList.findIndex(
            (obj: any) => obj.text.replace(/\s/g, '') == speechText
          );
          let objIndex2 = this.resultTextList.findIndex(
            (obj: any) => obj.text2.replace(/\s/g, '') == speechText
          );
          //Log object to Console.

          if (this.resultTextList[objIndex]) {
            this.resultTextList[objIndex].isDone = true;
            this.textPosition += 1;
            this.onTestValues(this.resultTextList);
            this.clearService();
          }
          if (this.resultTextList[objIndex2]) {
            this.resultTextList[objIndex2].isDone = true;
            this.textPosition += 1;
            this.onTestValues(this.resultTextList);
            this.clearService();
          }
          //Log object to console again.

        }
      },
      error: (err: any) => {
        console.error('Error: ', err);
      },
    });
  }

  onTestValues(List: any) {
    let complete = List.filter((done: any) => done?.isDone == true);



    if (complete.length == List?.length) {

      this.clearService();
      this.stopService();
      // alert('completed!!!');
      // this.textPosition += 1;
      // this.stopService();
      // this.clearService();

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '4',
        data: List,
      };

      this.onSubmit(Payload)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  startService() {
    this._paragraphStageThreeSvc.start();
  }

  stopService() {
    this._paragraphStageThreeSvc.stop();
  }

  clearService() {
    this._paragraphStageThreeSvc.clear();
  }

  onSubmit(Result: ExerciseAnswer) {

    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    let subscription = this._paragraphStageThreeSvc.SubmitGameStageResult(Result).subscribe({
      next: (response: any) => {
        if (response) {

          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
            payload: Result,
          });
          this.openSnackBar(response?.message);
          setTimeout(() => {
            this.isFinishedMessage = '';
            this.successMessage = '';
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
            payload: err,
          });
        }
      },
    });
    this.Subscriptions.push(subscription)
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
