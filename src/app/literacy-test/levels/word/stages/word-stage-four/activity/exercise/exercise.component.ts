import { Component, OnInit } from '@angular/core';
import { WordStageFourService } from 'src/app/services/word/word-stage-four.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {
  selectedAlphabets: any[] = [];
  actionWords: any[] = [
    // { name: 'love' },
    // { name: 'in' },
    // { name: 'water' },
    // { name: 'like' },
    // { name: 'i' },
    // { name: 'my' },
    // { name: 'a' },
    // { name: 'have' },
    // { name: 'live' },
    // { name: 'worms' },
    // { name: 'this' },
    // { name: 'big' },
    // { name: 'is' },
    // { name: 'eat' },
  ];
  resultList: any[] = [];

  constructor(private _wordStageFourService: WordStageFourService) {}

  ngOnInit(): void {
    this.onGetActionWords();
    this.onGetResultList();
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
}
