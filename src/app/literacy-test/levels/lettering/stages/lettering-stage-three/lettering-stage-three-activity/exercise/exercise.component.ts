import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alphabet, AlphabetType } from 'src/app/models/types/alphabet';
import { LrpLetteringActivityService } from 'src/app/practice/lrp-activity/services/lrp-lettering-activity.service';
import { StageThreeActivityService } from 'src/app/services/stage-three-activity.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit, DoCheck {
  alphabets!: Alphabet[];
  consonants!: Alphabet[];
  consonant = AlphabetType.CONSONANT;
  inputDate: any[] = [];
  selectedAlphabets: any[] = [];
  exerciseAlphabets: any;
  resultTwoLetterWords: any[] = [];

  constructor(
    private _stageThreeActivitySvc: StageThreeActivityService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.getConsonantLetters();
    this.getresultTwoLetterWords();
  }

  ngDoCheck(): void {
    // console.log('Something Happpend!!!');
    // console.log('selectedAlphabets: ', this.selectedAlphabets);
    this.onTestValues();
    this.onComplete();
  }

  onTestValues() {
    for (let i in this.resultTwoLetterWords) {
      // console.log('i: ', this.resultTwoLetterWords[i].word);
      // console.log('i: ', this.selectedAlphabets);
      if (
        this.resultTwoLetterWords[i].word[0]?.id ==
        this.selectedAlphabets[0]?.id
      ) {
        // console.log('true: ', this.resultTwoLetterWords[i]);
        this.selectedAlphabets[0].isWellPlaced = true;
      }

      if (this.selectedAlphabets.length != 0) {
        if (
          this.resultTwoLetterWords[i].word[0]?.id !=
          this.selectedAlphabets[0]?.id
        ) {
          // console.log('bad: ', this.resultTwoLetterWords[i]);
        }
      }
      if (
        this.resultTwoLetterWords[i].word[1]?.id ==
        this.selectedAlphabets[1]?.id
      ) {
        this.resultTwoLetterWords[i].isWellPlaced = true;
      }
      if (
        this.resultTwoLetterWords[i].word[0]?.id ==
          this.selectedAlphabets[0]?.id &&
        this.resultTwoLetterWords[i].word[1]?.id ==
          this.selectedAlphabets[1]?.id
      ) {
        console.log('YES!!!');
        this.resultTwoLetterWords[i].isDone = true;
        this.selectedAlphabets = [];
      } else {
        console.log('NO!!!');
      }
    }
  }

  getConsonantLetters() {
    this.alphabets =
      this._stageThreeActivitySvc.GetExerciseAlphabetForStageThree();

    this.exerciseAlphabets =
      this._stageThreeActivitySvc.GetExerciseAlphabetForStageThree();
  }

  getresultTwoLetterWords() {
    this.resultTwoLetterWords =
      this._stageThreeActivitySvc.GetresultTwoLetterWords();
    // console.log(' this.resultTwoLetterWords: ', this.resultTwoLetterWords);
  }


  // onSelected(Alphabet: any) {
  //   // console.log('Alphabet: ', Alphabet);
  //   let itemExists = false;
  //   let AlphabetItem = {
  //     id: Alphabet.id,
  //     name: Alphabet.name,
  //     type: Alphabet.type,
  //     isWellPlaced: Alphabet.isWellPlaced,
  //     // isChecked: Alphabet.isChecked,
  //   };
  //   if (!Alphabet.isChecked) {
  //     this.selectedAlphabets = this.selectedAlphabets.filter(
  //       (items: any) => items.id != Alphabet.id
  //     );
  //   }
  //   if (Alphabet.isChecked) {
  //     if (!this.selectedAlphabets.length) {
  //       this.selectedAlphabets.push(AlphabetItem);
  //     } else if (this.selectedAlphabets.length == 2) {
  //       Alphabet.isChecked = false;
  //       return;
  //     } else {
  //       for (let item of this.selectedAlphabets) {
  //         // console.log('item: ', item);
  //         if (item?.id == Alphabet?.id) {
  //           // console.log(item, ' exists');
  //           itemExists = true;
  //         }
  //       }
  //       if (!itemExists) {
  //         this.selectedAlphabets.push(AlphabetItem);

  //         this.exerciseAlphabets.forEach((item: any) => {
  //           console.log('item: ', item);
  //           item.isChecked = false;
  //         });
  //       }
  //     }
  //   }
  // }

  
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
        this.selectedAlphabets = x.filter(
          (item: any) => item.name != LetterItem.name
        );
      } else {
        if (this.selectedAlphabets.length > 1) {
          alert('Filled!!!');
          return;
        }
        this.selectedAlphabets.push(LetterItem);
      }
    } else {
      if (this.selectedAlphabets.length > 1) {
        alert('Filled!!!');
        return;
      }
      this.selectedAlphabets.push(LetterItem);
    }
  }


  onComplete() {
    let complete = this.resultTwoLetterWords.filter(
      (done: any) => done?.isDone == true
    );
    // console.log('complete: ', complete);
    if (complete.length == 5) {
      alert('Congratulations!!!');
      this._router.navigate([
        '/literacy/lettering/stage-3/activity/exercise-two',
      ]);
    }
  }
}
