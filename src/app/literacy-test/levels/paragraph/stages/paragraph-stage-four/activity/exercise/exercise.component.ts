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
import { ParagraphStageFourService } from 'src/app/services/paragraph/paragraph-stage-four.service';
import { SnackbarComponent } from 'src/app/shared/components/snackbar/snackbar.component';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  actionWords: any[] = [];
  gameSessionId: any;
  resultList: any[] = [];
  exerciseNumber: number = 0;
  isFinishedMessage!: string;
  stageNumber: number = 4;
  successMessage: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 10;
  gameLevel = GameLevel.PARAGRAPH;
  constructor(
    private _paragraphStageFourSvc: ParagraphStageFourService,
    private _gameSvc: GameService,
    private _router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onGetGameSessionId();
    this.onGetActionWords();
    this.onGetResultList();
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
    let list = this._paragraphStageFourSvc.GetActionWords();
    console.log('list : ', list);
    this.actionWords = list.filter((l: any) => l.name != 'fish');
    console.log('this.actionWords : ', this.actionWords);
  }
  onGetResultList() {
    this.resultList = this._paragraphStageFourSvc.GetresultList();
    console.log('this.resultList : ', this.resultList);
  }

  onSelect(WordItem: any) {
    console.log('WordItem :', WordItem);
    let resultItem = this.resultList[this.exerciseNumber];
    let list = this.resultList[this.exerciseNumber]?.word;
    console.log('list :', list);
    // let y = list.findIndex((i: any) => i.name == WordItem.name);
    // console.log('y :', y);
    // let y = list.find((i: any) => i.name == WordItem.name);
    // console.log('y :', y);

    let objIndex = list.findIndex(
      (obj: any) => obj.name == WordItem.name && obj.isWellPlaced == null
    );
    //Log object to Console.
    console.log('Before update: ', list[objIndex]);
    //Update object's name property.
    if (list[objIndex]) {
      list[objIndex].isWellPlaced = true;
    }
    //Log object to console again.
    console.log('After update: ', list[objIndex]);
    // this.resultList =  list;
    this.onTestValues(list, resultItem);
  }

  onTestValues(List: any, ResultItem: any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    console.log('complete: ', complete);
    console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      console.log('completed!!!');
      this.exerciseNumber += 1;

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '5',
        data: this.resultList,
      };
      console.log('x: ', Payload);
      let y = Payload.data.filter((item: any) => item.isDone == true);
      if (y.length == this.resultList?.length) {
        console.log('All done!!!: ', y);
        // alert('All done!!!!!');
        console.log('x: ', Payload);
        this.onSubmit(Payload);
      }
    }
  }

  onSubmit(Result: ExerciseAnswer) {
    console.log('Result: ', Result);
    this._paragraphStageFourSvc.SubmitGameStageResult(Result).subscribe({
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

  openSnackBar(data: any) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: data,
    });
  }
}
