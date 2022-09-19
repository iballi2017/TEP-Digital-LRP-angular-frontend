import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAppState } from 'src/redux/store';
import {
  FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE,
  FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_ERROR,
  FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS,
} from 'src/redux/_game.store/game.actions';
import { LetteringStageThreeExerciseOneStorage } from '../literacy-test/levels/lettering/stages/lettering-stage-three/lettering-stage-three-activity/exercise-one/exercise-one.component';
import { AlphabetType } from '../models/types/alphabet';

@Injectable({
  providedIn: 'root',
})
export class StageThreeActivityExerciseOneService {
  alphabetsList: any = [];

  constructor(private _http: HttpClient, private ngRedux: NgRedux<IAppState>) {}

  GetAlphabetForStageThree() {
    this.alphabetsList = [...alphabets];
    return this.alphabetsList;
  }

  GetExerciseAlphabetForStageThree() {
    this.alphabetsList = [...exerciseAlphabets];
    return this.alphabetsList;
  }

  GetresultTwoLetterWords() {
    this.alphabetsList = [...resultTwoLetterWords];
    return this.alphabetsList;
  }

  LoadStageThreeExerciseOneResult() {
    this.ngRedux.dispatch({ type: FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE });
    let data: any = sessionStorage.getItem(
      LetteringStageThreeExerciseOneStorage.EXERCISE_ONE
    );
    //  console.log('data: ', data);
    if (data) {
      this.ngRedux.dispatch({
        type: FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS,
        payload: JSON.parse(data),
      });
    } else {
      this.ngRedux.dispatch({
        type: FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_ERROR,
        payload: {
          content: null,
          message: 'No result is saved from exercise one',
        },
      });
    }
  }
}

export const exerciseAlphabets = [
  {
    // id: 6,
    name: 'f',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: null,
  },
  {
    // id: 1,
    name: 'a',
    isChecked: false,
    type: AlphabetType.VOWEL,
    isWellPlaced: null,
  },
  {
    // id: 13,
    name: 'm',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: true,
  },
  {
    // id: 3,
    name: 'c',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: null,
  },
  {
    // id: 15,
    name: 'o',
    isChecked: false,
    type: AlphabetType.VOWEL,
    isWellPlaced: null,
  },
  {
    // id: 2,
    name: 'b',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: null,
  },
  {
    // id: 20,
    name: 't',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: null,
  },
  {
    // id: 11,
    name: 'k',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: null,
  },
  {
    // id: 7,
    name: 'g',
    isChecked: false,
    type: AlphabetType.CONSONANT,
    isWellPlaced: null,
  },
];

export const alphabets = [
  {
    // id: 1,
    name: 'a',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    // id: 2,
    name: 'b',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 3,
    name: 'c',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 4,
    name: 'd',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 5,
    name: 'e',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    // id: 6,
    name: 'f',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 7,
    name: 'g',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 8,
    name: 'h',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 9,
    name: 'i',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    // id: 10,
    name: 'j',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 11,
    name: 'k',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 12,
    name: 'l',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 13,
    name: 'm',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 14,
    name: 'n',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 15,
    name: 'o',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    // id: 16,
    name: 'p',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 17,
    name: 'q',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 18,
    name: 'r',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 19,
    name: 's',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 20,
    name: 't',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 21,
    name: 'u',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    // id: 22,
    name: 'v',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 23,
    name: 'w',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 24,
    name: 'x',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 25,
    name: 'y',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    // id: 26,
    name: 'z',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
];

export const resultTwoLetterWords = [
  {
    // id: 1,
    isDone: false,
    word: [
      {
        // id: 1,
        name: 'a',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
      {
        // id: 20,
        name: 't',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
    ],
  },
  {
    // id: 2,
    isDone: false,
    word: [
      {
        // id: 6,
        name: 'f',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        // id: 1,
        name: 'a',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 3,
    isDone: false,
    word: [
      {
        // id: 13,
        name: 'm',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        // id: 1,
        name: 'a',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 4,
    isDone: false,
    word: [
      {
        // id: 2,
        name: 'b',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        // id: 1,
        name: 'a',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 5,
    isDone: false,
    word: [
      {
        // id: 20,
        name: 't',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        // id: 15,
        name: 'o',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
];
