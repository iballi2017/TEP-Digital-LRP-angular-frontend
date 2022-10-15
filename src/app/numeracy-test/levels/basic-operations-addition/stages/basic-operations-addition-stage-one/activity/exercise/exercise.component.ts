import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { BasicOperationsAdditionService } from 'src/app/services/basic-operations/basic-operations-addition.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  pageTitle: string = 'Can you add the 1-digit numbers here';
  actionWords: any[] = [];
  gameSessionId: any;

  uiExercise: any[] = [];
  letteringStages = [
    {
      id: 1,
      title: 'stage-1',
      rating: 3,
    },
    {
      id: 2,
      title: 'stage-2',
      rating: 2,
    },
    {
      id: 3,
      title: 'stage-3',
      rating: 5,
    },
    {
      id: 4,
      title: 'stage-4',
      rating: 5,
    },
  ];
  totalStarNumber: number = 5;
  resultNumbers: any = [];
  questionResultNumbers: any = [];
  answerNumber!: any;
  testLoopNumber: number = 1;

  constructor(
    private _basicOperationsAdditionSvc: BasicOperationsAdditionService,
    private _gameSvc: GameService
  ) {}

  ngOnInit(): void {
    this.getActionNumbers();
    this.getresultNumbers();
    this.onGetGameSessionId();
    this.modifyStageArray();
  }

  modifyStageArray() {
    this.questionResultNumbers.forEach((stage: any) => {
      console.log('stage: ', stage);
      let blueTriangleList: any[] = [];
      for (let i = 0; i < stage.figure; i++) {
        blueTriangleList.push({ isDone: true });
      }
      for (let i = 0; i < this.totalStarNumber - stage.rating; i++) {
        blueTriangleList.push('item');
      }
      let x: any = { ...stage, blueTriangleList: blueTriangleList };
      this.uiExercise.push(x);
    });
    console.log('uiExercise: ', this.uiExercise);

    // this.letteringStages.forEach((stage: any) => {
    //   console.log('stage: ', stage);
    //   let starArray: any[] = [];
    //   for (let i = 0; i < stage.rating; i++) {
    //     starArray.push({ isDone: true });
    //   }
    //   for (let i = 0; i < this.totalStarNumber - stage.rating; i++) {
    //     starArray.push({ isDone: false });
    //   }
    //   let x: any = { ...stage, starArray: starArray };
    //   this.uiExercise.push(x);
    // });
    // console.log('uiExercise: ', this.uiExercise);
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

  getActionNumbers() {
    let numbersList = this._basicOperationsAdditionSvc.GetActionNumbers();
    console.log('actionWords: ', numbersList);
    this.actionWords = numbersList;
  }
  getresultNumbers() {
    let numbersList = this._basicOperationsAdditionSvc.GetresultNumbers();
    this.resultNumbers = numbersList;
    console.log('resultNumbers: ', numbersList);
    console.log(
      'resultNumbers: ',
      numbersList?.numbers[this.testLoopNumber]?.questionItems
    );
    this.answerNumber =
      numbersList?.numbers[this.testLoopNumber].answer?.figure;
    this.questionResultNumbers =
      numbersList?.numbers[this.testLoopNumber]?.questionItems;
  }

  onSelect(item: any) {}
  onReset() {}
}
