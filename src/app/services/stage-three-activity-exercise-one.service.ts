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
    let data: any = localStorage.getItem(
      LetteringStageThreeExerciseOneStorage.EXERCISE_ONE
    );
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
    name: 'f',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'a',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'm',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'c',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'o',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'b',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 't',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'k',
    isChecked: false,
    isWellPlaced: null,
  },
  {
    name: 'g',
    isChecked: false,
    isWellPlaced: null,
  },
];

export const alphabets = [
  {
    name: 'a',
    isChecked: false,
  },
  {
    name: 'b',
    isChecked: false,
  },
  {
    name: 'c',
    isChecked: false,
  },
  {
    name: 'd',
    isChecked: false,
  },
  {
    name: 'e',
    isChecked: false,
  },
  {
    name: 'f',
    isChecked: false,
  },
  {
    name: 'g',
    isChecked: false,
  },
  {
    name: 'h',
    isChecked: false,
  },
  {
    name: 'i',
    isChecked: false,
  },
  {
    name: 'j',
    isChecked: false,
  },
  {
    name: 'k',
    isChecked: false,
  },
  {
    name: 'l',
    isChecked: false,
  },
  {
    name: 'm',
    isChecked: false,
  },
  {
    name: 'n',
    isChecked: false,
  },
  {
    name: 'o',
    isChecked: false,
  },
  {
    name: 'p',
    isChecked: false,
  },
  {
    name: 'q',
    isChecked: false,
  },
  {
    name: 'r',
    isChecked: false,
  },
  {
    name: 's',
    isChecked: false,
  },
  {
    name: 't',
    isChecked: false,
  },
  {
    name: 'u',
    isChecked: false,
  },
  {
    name: 'v',
    isChecked: false,
  },
  {
    name: 'w',
    isChecked: false,
  },
  {
    name: 'x',
    isChecked: false,
  },
  {
    name: 'y',
    isChecked: false,
  },
  {
    name: 'z',
    isChecked: false,
  },
];

export const resultTwoLetterWords = [
  {
    isDone: false,
    word: [
      {
        name: 'a',
        isChecked: false,
      },
      {
        name: 't',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'f',
        isChecked: false,
      },
      {
        name: 'a',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'm',
        isChecked: false,
      },
      {
        name: 'a',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'b',
        isChecked: false,
      },
      {
        name: 'a',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 't',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'g',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'b',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'f',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'c',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 't',
        isChecked: false,
      },
      {
        name: 'a',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'm',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'k',
        isChecked: false,
      },
      {
        name: 'o',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'c',
        isChecked: false,
      },
      {
        name: 'a',
        isChecked: false,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'g',
        isChecked: false,
      },
      {
        name: 'a',
        isChecked: false,
      },
    ],
  },
];
