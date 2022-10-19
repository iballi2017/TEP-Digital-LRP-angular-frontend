import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { BasicOperationsDivisionStageOneService } from 'src/app/services/basic-operations/basic-operations-division-stage-one.service';
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
  answerNumber!: any;
  uiExercise: any[] = [];
  resultNumbers: any = [];
  questionResultNumbers: any = [];
  totalStarNumber: number = 5;
  testLoopNumber: number = 0;

  constructor(
    private _basicOperationsDivisionSvc: BasicOperationsDivisionStageOneService,
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
    let numbersList = this._basicOperationsDivisionSvc.GetActionNumbers();
    console.log('numbersList: ', numbersList);
    this.actionWords = numbersList;
  }
  getresultNumbers() {
    // this.resultNumbers = numbersList;
    let numbersList = this._basicOperationsDivisionSvc.GetresultNumbers();
    this.resultNumbers = numbersList;
    console.log('resultNumbers: ', numbersList);
    console.log(
      'resultNumbers: ',
      numbersList?.numbers[this.testLoopNumber]?.questionItems
    );
    this.answerNumber =
      numbersList?.numbers[this.testLoopNumber].answer;
    this.questionResultNumbers =
      numbersList?.numbers[this.testLoopNumber]?.questionItems;
  }

  trackResultHint() {
    console.log('==>: ', this.resultNumbers.numbers[this.testLoopNumber]);
    let x = this.resultNumbers.numbers[this.testLoopNumber];
    console.log('x: ', x);
    if (x.answer?.isWellPlaced == true) {
      x.isDone = true;
    }
    this.textExercise();
  }

  textExercise() {
    let questionItems = this.resultNumbers.numbers;
    console.log('question item: ', questionItems);
    let done = questionItems.filter((i: any) => i.isDone == true);
    console.log('done item: ', done);
    if (done.length < questionItems.length) {
      this.testLoopNumber++;
      setTimeout(() => {
        this.uiExercise = [];
        this.getresultNumbers();
        this.modifyStageArray();
      }, 1200);
    }

    this.onTestValues();
  }

  onTestValues() {
    let questionItems = this.resultNumbers.numbers;
    console.log('onTest()');
    let complete = questionItems.filter((done: any) => done?.isDone == true);

    console.log('complete: ', complete);
    console.log('ResultItem: ', this.resultNumbers);
    // console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == questionItems?.length) {
      this.resultNumbers.isComplete = true;
      console.log('completed!!!');
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [this.resultNumbers],
      };
      console.log('x: ', Payload);
      // this.onSubmit(Payload);
    }
  }

  onSelect(item: any) {
    // console.log('item: ', item);
    let result = this.resultNumbers?.numbers[this.testLoopNumber];
    // console.log('answer :', result.answer);
    if (item.figure == result.answer.figure) {
      item.isCorrectNumber = true;
      result.answer.isWellPlaced = true;
      this.trackResultHint();
    }
    else {
      item.isWrongNumber = true;
      // console.log('item: ', item);
    }
    // console.log('answer :', result.answer);
  }

  onReset() {
    this.resultNumbers?.numbers.forEach((element: any) => {
      element.isDone = false;
      element.answer.isWellPlaced = false;
    });
    this.testLoopNumber = 0;
    this.uiExercise = [];
    this.getresultNumbers();
    this.modifyStageArray();
  }

  onSubmit(Payload: any) {}
}