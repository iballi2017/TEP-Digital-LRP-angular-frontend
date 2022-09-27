import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { GameService } from 'src/app/services/game.service';
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';

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

  constructor(private _wordStageFourService: WordStageFourService,
    private _gameSvc: GameService) {}

  ngOnInit(): void {
    this.onGetActionWords();
    this.onGetResultList();
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
    let list = this._wordStageFourService.GetActionWords();
    console.log('list : ', list);
    this.actionWords = list.filter((l: any) => l.name != 'fish');
    console.log('this.actionWords : ', this.actionWords);
  }
  onGetResultList() {
    this.resultList = this._wordStageFourService.GetresultList();
    console.log('this.resultList : ', this.resultList);
  }

  onPush(LetterItem: any) {
    console.log('LetterItem: ', LetterItem);
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
        console.log(LetterItem, ': removed!!!');
        this.selectedAlphabets = x.filter(
          (item: any) => item.name != LetterItem.name
        );
      } else {
        if (this.selectedAlphabets.length > 3) {
          alert('Filled!!!');
          return;
        }
        this.selectedAlphabets.push(LetterItem);
        console.log('this.selectedAlphabets: ', this.selectedAlphabets);
        // this.onTestValues();
      }
    } else {
      if (this.selectedAlphabets.length > 1) {
        alert('Filled!!!');
        return;
      }
      this.selectedAlphabets.push(LetterItem);
      console.log('this.selectedAlphabets: ', this.selectedAlphabets);
      // this.onTestValues();
    }
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
    this.onTestValues(list, resultItem);
  }

  onTestValues(List: any, ResultItem:any) {
    let complete = List.filter((done: any) => done?.isWellPlaced == true);

    console.log('complete: ', complete);
    console.log('this.exerciseNumber: ', this.exerciseNumber);

    if (complete.length == List?.length) {
      ResultItem.isDone = true;
      console.log('completed!!!');
      this.exerciseNumber += 1;

      const Payload: ExerciseAnswer = {
        session_id: this.gameSessionId,
        anwser: '4',
        data: this.resultList,
      };
      console.log('x: ', Payload);
      this.onSubmit(Payload)
    }
  }

  onSubmit(Result: ExerciseAnswer) {
    console.log('Result: ', Result);
  }
}