import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { BasicOperationsMultiplicationStageFourService } from 'src/app/services/basic-operations/multiplication/basic-operations-multiplication-stage-four.service';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  pageTitle: string = 'Solve multiplication word problems presented';
  actionWords: any[] = [];
  gameSessionId: any;
  totalStarNumber: number = 5;
  resultNumbers: any = [];
  questionResultNumbers: any = [];
  answerNumber!: any;
  testLoopNumber: number = 0;
  itemIndex: number = 0;
  questionStatement!: string;

  constructor(
    private _basicOperationsMultiplicationStageFourSvc: BasicOperationsMultiplicationStageFourService,
    private _gameSvc: GameService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getActionNumbers();
    this.getResultNumbers();
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

  getActionNumbers() {
    let numbersList =
      this._basicOperationsMultiplicationStageFourSvc.GetActionNumbers();
    
    this.actionWords = numbersList;
  }
  getResultNumbers() {
    let numbersList =
      this._basicOperationsMultiplicationStageFourSvc.GetResultNumbers();
    
    this.resultNumbers = numbersList;
    this.questionStatement =  numbersList?.numbers[this.testLoopNumber]?.answer?.statement;
    // this.answerNumber = numbersList?.numbers[this.testLoopNumber].answer;
    // this.questionResultNumbers =
    //   numbersList?.numbers[this.testLoopNumber]?.questionItems;
  }

  trackResultHint() {
    
    let x = this.resultNumbers.numbers[this.testLoopNumber];
    
    if (x.answer?.isWellPlaced == true) {
      x.isDone = true;
    }
    this.textExercise();
  }

  textExercise() {
    let questionItems = this.resultNumbers.numbers;
    
    let done = questionItems.filter((i: any) => i.isDone == true);
    
    if (done.length < questionItems.length) {
      this.testLoopNumber++;
      setTimeout(() => {
        this.getResultNumbers();
      }, 1200);
    }

    this.onTestValues();
  }

  onTestValues() {
    let questionItems = this.resultNumbers.numbers;
    
    let complete = questionItems.filter((done: any) => done?.isDone == true);

    
    
    

    if (complete.length == questionItems?.length) {
      this.resultNumbers.isComplete = true;
      
      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        answer: '1',
        data: [this.resultNumbers],
      };
     
      this.onSubmit(Payload);
    }
  }

  onSelect(item: any) {
    let result = this.resultNumbers?.numbers[this.testLoopNumber];
    
    
    if (item.figure == result.answer.figure) {
      item.isCorrectNumber = true;
      result.answer.isWellPlaced = true;
      this.trackResultHint();
    } else {
      item.isWrongNumber = true;
      // 
    }
  }

  onReset() {
    this.resultNumbers?.numbers.forEach((element: any) => {
      element.isDone = false;
      element.answer.isWellPlaced = false;
    });
    this.testLoopNumber = 0;
    this.getResultNumbers();
  }


  onSubmit(Payload: any) {
    console.log('Payload: ', Payload);
    setTimeout(() => {
      alert('Completed');
      this._router.navigate([
        '/numeracy/basic-operations-division/stage-1/activity/',
      ]);
    }, 2000);
  }
}
