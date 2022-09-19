import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordStageOneService {

  constructor() {}

  GetActionAlphabets() {
    let alphabetsList = [...actionAlphabets];
    return alphabetsList;
  }
  GetresultLetterWords() {
    let alphabetsList = [...resultLetterWords];
    return alphabetsList;
  }
}

export const actionAlphabets = [
  {
    name: 'ca',
    isChecked: false,
  },
  {
    name: 'N',
    isChecked: false,
  },
  {
    name: 'pa',
    isChecked: false,
  },
  {
    name: 'ta',
    isChecked: false,
  },
  {
    name: 'm',
    isChecked: false,
  },
];

export const resultLetterWords = [
  {
    // id: 1,
    isDone: false,
    word: [
      {
        name: 'ca',
        isChecked: false,
      },
      {
        name: 'N',
        isChecked: false,
      },
    ],
  },
  {
    // id: 1,
    isDone: false,
    word: [
      {
        name: 'ta',
        isChecked: false,
      },
      {
        name: 'N',
        isChecked: false,
      },
    ],
  },
  {
    // id: 1,
    isDone: false,
    word: [
      {
        name: 'pa',
        isChecked: false,
      },
      {
        name: 'N',
        isChecked: false,
      },
    ],
  },
];
