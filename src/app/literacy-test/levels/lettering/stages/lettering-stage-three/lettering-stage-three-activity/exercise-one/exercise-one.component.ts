import { NgRedux, select } from '@angular-redux/store';
import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alphabet, AlphabetType } from 'src/app/models/types/alphabet';
import { LrpLetteringActivityService } from 'src/app/practice/lrp-activity/services/lrp-lettering-activity.service';
import { GameService } from 'src/app/services/game.service';
import { StageThreeActivityExerciseOneService } from 'src/app/services/stage-three-activity-exercise-one.service';
import { IAppState } from 'src/redux/store';
import {
  ADD_LETTERING_STAGE_THREE_EXERCISE_ONE,
  ADD_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS,
} from 'src/redux/_game.store/game.actions';

@Component({
  selector: 'app-exercise-one',
  templateUrl: './exercise-one.component.html',
  styleUrls: ['./exercise-one.component.scss'],
})
export class ExerciseOneComponent implements OnInit, DoCheck {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;
  alphabets!: Alphabet[];
  consonants!: Alphabet[];
  consonant = AlphabetType.CONSONANT;
  inputDate: any[] = [];
  selectedAlphabets: any[] = [];
  exerciseAlphabets: any;
  resultTwoLetterWords: any[] = [];
  gameSessionId: any;

  constructor(
    private _gameSvc: GameService,
    private _stageThreeActivitySvc: StageThreeActivityExerciseOneService,
    private _router: Router,
    private ngRedux: NgRedux<IAppState>
  ) {}

  ngOnInit(): void {
    this.onGetGameSessionId();
    this.getConsonantLetters();
    this.getresultTwoLetterWords();
  }

  ngDoCheck(): void {
    // console.log('Something Happpend!!!');
    // console.log('selectedAlphabets: ', this.selectedAlphabets);
    this.onTestValues();
    this.onComplete();
  }

  onGetGameSessionId() {
    this._gameSvc.LoadGameSession()
    this.gameSession$.subscribe({
      next: (data: any) => {
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  onTestValues() {
    for (let i in this.resultTwoLetterWords) {
      // console.log('i: ', this.resultTwoLetterWords[i].word);
      // console.log('i: ', this.selectedAlphabets);
      if (
        this.resultTwoLetterWords[i].word[0]?.name ==
        this.selectedAlphabets[0]?.name
      ) {
        // console.log('true: ', this.resultTwoLetterWords[i]);
        this.selectedAlphabets[0].isWellPlaced = true;
      }

      if (this.selectedAlphabets.length != 0) {
        if (
          this.resultTwoLetterWords[i].word[0]?.name !=
          this.selectedAlphabets[0]?.name
        ) {
          // console.log('bad: ', this.resultTwoLetterWords[i]);
        }
      }
      if (
        this.resultTwoLetterWords[i].word[1]?.name ==
        this.selectedAlphabets[1]?.name
      ) {
        this.resultTwoLetterWords[i].isWellPlaced = true;
      }
      if (
        this.resultTwoLetterWords[i].word[0]?.name ==
          this.selectedAlphabets[0]?.name &&
        this.resultTwoLetterWords[i].word[1]?.name ==
          this.selectedAlphabets[1]?.name
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
  //         if (item?.name == Alphabet?.name) {
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
    let complete: any = this.resultTwoLetterWords.filter(
      (done: any) => done?.isDone == true
    );
    console.log('complete: ', complete);
    if (complete.length == 5) {
      this.onSubmit(complete);
      // alert('Congratulations!!!');
      // this._router.navigate([
      //   '/literacy/lettering/stage-3/activity/exercise-two',
      // ]);
    }
  }

  onSubmit(complete: any) {
    this.ngRedux.dispatch({ type: ADD_LETTERING_STAGE_THREE_EXERCISE_ONE });
    const Payload: any = {
      // session_id: this.gameSessionId,
      // anwser: '1',
      data: complete,
    };
    console.log('Payload: ', Payload);
    let x = JSON.stringify(Payload);
    sessionStorage.setItem(
      LetteringStageThreeExerciseOneStorage.EXERCISE_ONE,
      x
    );
    this.ngRedux.dispatch({
      type: ADD_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS,
      payload: Payload,
    });
    this._router.navigate([
      '/literacy/lettering/stage-3/activity/exercise-two',
    ]);
  }
}

export interface LetteringStageThreeExerciseAnswer {
  session_id: string;
  anwser: string;
  data: any[];
}

export enum LetteringStageThreeExerciseOneStorage {
  EXERCISE_ONE = 'EXERCISE_ONE',
}
