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
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  onGetActionWords() {
    let list = this._storyStageOneSvc.GetActionWords();
    console.log('list : ', list);
    this.actionWords = list.filter((l: any) => l.name != 'fish');
    console.log('this.actionWords : ', this.actionWords);
  }

  onGetTitleResultList() {
    this.titleResultList = this._storyStageOneSvc.GetTitleResultList();
    console.log('this.titleResultList : ', this.titleResultList);
  }
  onGetStoryResultList() {
    this.storyResultList = this._storyStageOneSvc.GetStoryResultList();
    console.log('this.storyResultList : ', this.storyResultList);
  }

  onSelect(WordItem: any) {
    console.log('WordItem :', WordItem);
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
    console.log('list :', list);

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
    console.log('this.titleResultList: ', this.titleResultList);

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
    console.log('list :', list);

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
    // this.onTestValues(list, resultItem);
    this.onTestStoryValues(list, resultItem);
  }

  // onTestValues(List: any, ResultItem: any) {
  //   let complete = List.filter((done: any) => done?.isWellPlaced == true);

  //   console.log('complete: ', complete);
  //   console.log('this.exerciseNumber: ', this.exerciseNumber);

  //   if (complete.length == List?.length) {
  //     ResultItem.isDone = true;
  //     console.log('completed!!!');
  //     this.exerciseNumber += 1;

  //     const Payload: ExerciseAnswer = {
  //       session_id: this.gameSessionId,
  //       anwser: '1',
  //       data: this.storyResultList,
  //     };
  //     let y = Payload.data.filter((item: any) => item.isDone == true);
  //     if (y.length == this.storyResultList?.length) {
  //       console.log('All done!!!: ', y);
  //       // alert('All done!!!!!');
  //       console.log('x: ', Payload);
  //       this.onSubmit(Payload);
  //     }
  //   }
  // }

  onTestTitleValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    console.log('complete: ', complete);
    console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      console.log('completed!!!');
      this.isStory = true;
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: this.titleResultList,
      };
      let y = Payload.data.filter((item: any) => item.isDone == true);
      if (y.length == this.titleResultList?.length) {
        console.log('All done!!!: ', y);
        // alert('All done!!!!!');
        console.log('x: ', Payload);
        this.titleTestData = Payload;
      }
    }
  }

  onTestStoryValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    console.log('complete: ', complete);
    console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      console.log('completed!!!');
      this.exerciseNumber += 1;

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: this.storyResultList,
      };
      let y = Payload.data.filter((item: any) => item.isDone == true);
      if (y.length == this.storyResultList?.length) {
        console.log('All done!!!: ', y);
        // alert('All done!!!!!');
        console.log('x: ', Payload);
        console.log('this.titleTestData: ', this.titleTestData);
        const newData = {
          ...Payload,
          data: Payload.data.concat(this.titleTestData.data),
        };
        console.log('newData: ', newData);
        // let z = Object.assign(Payload, this.titleTestData);
        // console.log('z: ', z);
        this.onSubmit(newData);
      }
    }
  }

  onReset() {
    // console.log('titleResultList: ', this.titleResultList);
    let list: any = [...this.titleResultList];
    console.log('list: ', list);
    list.forEach((c: any) => {
      c.isDone = false;
      c.word.forEach((element: any) => {
        element.isWellPlaced = false;
      });
    });
    this.titleResultList = list;
    console.log('titleResultList: ', this.titleResultList);
    //
    let list2: any = [...this.storyResultList];
    console.log('list2: ', list2);
    list2.forEach((c: any) => {
      c.isDone = false;
      c.word.forEach((element: any) => {
        element.isWellPlaced = false;
      });
    });
    this.storyResultList = list2;
    console.log('storyResultList: ', this.storyResultList);
    this.isStory = false;

    // list.forEach((item: any) => {
    //   item.isDone = false;
    //   let x = item.word.filter((i: any) => i.isHint != true);
    //   console.log('x : ', x );
    //   x.forEach((element: any) => {
    //     element.isWellPlaced = false;
    //   });
    // });
    this.exerciseNumber = 0;
  }

  onSubmit(Result: ExerciseAnswer) {
    console.log('Result: ', Result);
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    this._storyStageOneSvc.SubmitGameStageResult(Result).subscribe({
      next: (response: any) => {
        if (response) {
          console.log('response: ', response);
          this.ngRedux.dispatch({
            type: SUBMIT_GAME_STAGE_RESULT_SUCCESS,
            payload: Result,
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
