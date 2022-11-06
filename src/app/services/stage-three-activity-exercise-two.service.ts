import { Injectable } from '@angular/core';
import { AlphabetType } from '../models/types/alphabet';

@Injectable({
  providedIn: 'root',
})
export class StageThreeActivityExerciseTwoService {
  alphabetsList: any[] = [];
  constructor() {}

  GetresultFourLetterWords() {
    this.alphabetsList = [...resultFourtLetterWords];
    return this.alphabetsList;
  }

  GetActionAlphabets() {
    this.alphabetsList = [...actionAlphabets];
    return this.alphabetsList;
  }
}

export const actionAlphabets = [
  {
    name: 'mo',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'so',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'bo',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'fa',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'la',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'ma',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'bi',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    name: 'ra',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    name: 'lo',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    name: 'ba',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'ta',
    isChecked: false,
    type: AlphabetType.VOWEL,
  },
  {
    name: 'ka',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
  {
    name: 'ga',
    isChecked: false,
    type: AlphabetType.CONSONANT,
  },
];

export const resultFourtLetterWords = [
  {
    // id: 1,
    isDone: false,
    word: [
      {
        name: 'ga',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ma',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 2,
    isDone: false,
    word: [
      {
        name: 'la',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'bi',
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
        name: 'fa',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'bi',
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
        name: 'mo',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'lo',
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
        name: 'ra',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'bi',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 6,
    isDone: false,
    word: [
      {
        name: 'bo',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ga',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 7,
    isDone: false,
    word: [
      {
        name: 'fa',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ra',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 8,
    isDone: false,
    word: [
      {
        name: 'bo',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ka',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 9,
    isDone: false,
    word: [
      {
        name: 'mo',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ka',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 10,
    isDone: false,
    word: [
      {
        name: 'so',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'mo',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 11,
    isDone: false,
    word: [
      {
        name: 'lo',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ba',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 12,
    isDone: false,
    word: [
      {
        name: 'ka',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ga',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 13,
    isDone: false,
    word: [
      {
        name: 'mo',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ta',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
  {
    // id: 14,
    isDone: false,
    word: [
      {
        name: 'ta',
        isChecked: false,
        type: AlphabetType.CONSONANT,
      },
      {
        name: 'ka',
        isChecked: false,
        type: AlphabetType.VOWEL,
      },
    ],
  },
];
