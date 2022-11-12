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
import { StoryStageOneService } from 'src/app/services/story/story-stage-one.service';
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
  actionWords: any[] = [];
  titleResultList: any;
  storyResultList: any;
  exerciseNumber: number = 0;
  gameSessionId: any;
  durationInSeconds = 10;
  gameLevel = GameLevel.STORY;
  isFinishedMessage!: string;
  stageNumber: number = 1;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  isStory: any = false;
  titleTestData: any;

  constructor(
    private _storyStageOneSvc: StoryStageOneService,
    private _router: Router,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onGetActionWords();
    this.onGetTitleResultList();
    this.onGetStoryResultList();
    this.onGetGameSessionId();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession();
    this.gameSession$.subscribe({
      next: (data: any) => {
        this.gameSessionId = data?.session_id;
      },
    });
  }

  onGetActionWords() {
    let list = this._storyStageOneSvc.GetActionWords();

    this.actionWords = list.filter((l: any) => l.name != 'fish');
    
  }

  onGetTitleResultList() {
    this.titleResultList = this._storyStageOneSvc.GetTitleResultList();
    
  }
  onGetStoryResultList() {
    this.storyResultList = this._storyStageOneSvc.GetStoryResultList();
  }

  onSelect(WordItem: any) {
    if (!this.isStory) {
      this.onCompileTitleResult(WordItem);
    }
    if (this.isStory) {
      this.onCompileStoryResult(WordItem);
    }
  }

  onCompileTitleResult(WordItem: any) {
    let resultItem = this.titleResultList[this.exerciseNumber];
    let list = this.titleResultList[this.exerciseNumber]?.word;
    

    let objIndex = list.findIndex((obj: any) => obj.name == WordItem.name);
    //Log object to Console.
    
    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
    }
    //Log object to console again.
    
    // this.resultList =  list;
    

    this.onTestTitleValues(list, resultItem);
    // let y = this.titleResultList[0].word.filter((item: any) => item.isWellPlaced == true);
    // if (y.length == this.storyResultList?.length) {
    //   console.log('All done!!!: ', y);
    //   // alert('All done!!!!!');
    //   console.log('x: ', this.titleResultList);
    // }
  }

  onCompileStoryResult(WordItem: any) {
    let resultItem = this.storyResultList[this.exerciseNumber];
    let list = this.storyResultList[this.exerciseNumber]?.word;
    

    let objIndex = list.findIndex((obj: any) => obj.name == WordItem.name);
    //Log object to Console.
    
    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
    }
    //Log object to console again.
    
    this.onTestStoryValues(list, resultItem);
  }

  onTestTitleValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);
    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      this.isStory = true;
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: this.titleResultList,
      };
      let y = Payload.data.filter((item: any) => item.isDone == true);
      if (y.length == this.titleResultList?.length) {
        this.titleTestData = Payload;
      }
    }
  }

  onTestStoryValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      this.exerciseNumber += 1;

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: this.storyResultList,
      };
      let y = Payload.data.filter((item: any) => item.isDone == true);
      if (y.length == this.storyResultList?.length) {
        const newData = {
          ...Payload,
          data: Payload.data.concat(this.titleTestData.data),
        };
        this.onSubmit(newData);
      }
    }
  }

  onReset() {
    let list: any = [...this.titleResultList];
    list.forEach((c: any) => {
      c.isDone = false;
      c.word.forEach((element: any) => {
        element.isWellPlaced = false;
      });
    });
    this.titleResultList = list;
    //
    let list2: any = [...this.storyResultList];
    list2.forEach((c: any) => {
      c.isDone = false;
      c.word.forEach((element: any) => {
        element.isWellPlaced = false;
      });
    });
    this.storyResultList = list2;
    this.isStory = false;
    this.exerciseNumber = 0;
  }

  onSubmit(Result: ExerciseAnswer) {
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    this._storyStageOneSvc.SubmitGameStageResult(Result).subscribe({
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
            this.onReset();
            this._router.navigate([
              // `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
              `/${GameType.LITERACY}/game-type-completion/${this.gameLevel}`
              // `/${GameType.LITERACY}/stage-completion/${this.gameLevel}/${this.stageNumber}`,
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
