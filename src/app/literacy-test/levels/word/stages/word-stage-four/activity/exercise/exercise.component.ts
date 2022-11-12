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
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';
import { IAppState } from 'src/redux/store';
import { SUBMIT_GAME_STAGE_RESULT, SUBMIT_GAME_STAGE_RESULT_ERROR, SUBMIT_GAME_STAGE_RESULT_SUCCESS } from 'src/redux/_game.store/game.actions';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  selectedAlphabets: any[] = [];
  actionWords: any[] = [];
  resultList: any[] = [];
  exerciseNumber: number = 0;
  gameSessionId: any;
  durationInSeconds = 10;
  gameLevel = GameLevel.WORD;
  isFinishedMessage!: string;
  stageNumber: number = 4;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _wordStageFourService: WordStageFourService,
    private _router: Router,
    private _gameSvc: GameService,
    private ngRedux: NgRedux<IAppState>,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onGetActionWords();
    this.onGetResultList();
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
    let list = this._wordStageFourService.GetActionWords();
    
    this.actionWords = list.filter((l: any) => l.name != 'fish');
    
  }
  onGetResultList() {
    this.resultList = this._wordStageFourService.GetresultList();
    
  }

  // onPush(LetterItem: any) {
  //   if (this.selectedAlphabets.length) {
  //     let isItemExist = this.selectedAlphabets.includes(LetterItem);
  //     if (isItemExist) {
  //       let x = [...this.selectedAlphabets];
  //       
  //       this.selectedAlphabets = x.filter(
  //         (item: any) => item.name != LetterItem.name
  //       );
  //     } else {
  //       if (this.selectedAlphabets.length > 3) {
  //         
  //         return;
  //       }
  //       this.selectedAlphabets.push(LetterItem);
  //       
  //       // this.onTestValues();
  //     }
  //   } else {
  //     if (this.selectedAlphabets.length > 1) {
  //       
  //       return;
  //     }
  //     this.selectedAlphabets.push(LetterItem);
  //     
  //     // this.onTestValues();
  //   }
  // }

  onSelect(WordItem: any) {
    
    let resultItem = this.resultList[this.exerciseNumber];
    let list = this.resultList[this.exerciseNumber]?.word;
    
    let objIndex = list.findIndex((obj: any) => obj.name == WordItem.name);
    //Log object to Console.
    
    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
    }
    //Log object to console again.
    
    // this.resultList =  list;
    this.onTestValues(list, resultItem);
  }

  onTestValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    
    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      
      this.exerciseNumber += 1;

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: this.resultList,
      };
      let y = Payload.data.filter((item: any) => item.isDone == true);
      if (y.length == this.resultList?.length) {       
        this.onSubmit(Payload);
      }
    }
  }

  onReset() {
    
    let list = [...this.resultList];
    list.forEach((item: any) => {
      item.isDone = false;
      item.isWellPlaced = false;
      let x = item.word.filter((i: any) => i.name != 'fish');
      x.forEach((element: any) => {
        element.isDone = false;
        element.isWellPlaced = false;
      });
    });
    this.exerciseNumber = 0;
  }

  onSubmit(Result: ExerciseAnswer) {
    
    this.ngRedux.dispatch({ type: SUBMIT_GAME_STAGE_RESULT });
    this._wordStageFourService.SubmitGameStageResult(Result).subscribe({
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
            this.onReset();
            this._router.navigate([
              `/${GameType.LITERACY}/level-completion/${this.gameLevel}`
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
