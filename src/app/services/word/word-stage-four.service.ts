import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordStageFourService {
  // alphabetsList: any = [];

  constructor() {}

  GetActionWords() {
    let list = [...actionwords];
    return list;
  }

  GetresultList() {
    let list = [...results];
    return list;
  }

  // GetExerciseAlphabetForStageThree() {
  //   this.alphabetsList = [...exerciseAlphabets];
  //   return this.alphabetsList;
  // }
}

export const actionwords = [
  {
    name: 'love',
    isWellPlaced: null,
  },
  {
    name: 'in',
    isWellPlaced: null,
  },
  {
    name: 'water',
    isWellPlaced: true,
  },
  {
    name: 'like',
    isWellPlaced: null,
  },
  {
    name: 'i',
    isWellPlaced: null,
  },
  {
    name: 'my',
    isWellPlaced: null,
  },
  {
    name: 'a',
    isWellPlaced: null,
  },
  {
    name: 'have',
    isWellPlaced: null,
  },
  {
    name: 'live',
    isWellPlaced: null,
  },
  {
    name: 'worms',
    isWellPlaced: null,
  },
  {
    name: 'this',
    isWellPlaced: null,
  },
  {
    name: 'big',
    isWellPlaced: null,
  },
  {
    name: 'is',
    isWellPlaced: null,
  },
  {
    name: 'eat',
    isWellPlaced: null,
  },
  {
    name: 'fish',
    isWellPlaced: null,
  },
];

export const results = [
  {
    isDone: false,
    word: [
      {
        name: 'this',
        isWellPlaced: null,
      },
      {
        name: 'is',
        isWellPlaced: null,
      },
      {
        name: 'my',
        isWellPlaced: null,
      },
      {
        name: 'fish',
        isWellPlaced: null,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'my',
        isWellPlaced: null,
      },
      {
        name: 'fish',
        isWellPlaced: null,
      },
      {
        name: 'lives',
        isWellPlaced: null,
      },
      {
        name: 'in',
        isWellPlaced: null,
      },
      {
        name: 'water',
        isWellPlaced: null,
      },
    ],
  },
  {
    isDone: false,
    word: [
      {
        name: 'i',
        isWellPlaced: null,
      },
      {
        name: 'love',
        isWellPlaced: null,
      },
      {
        name: 'my',
        isWellPlaced: null,
      },
      {
        name: 'fish',
        isWellPlaced: null,
      },
    ],
  },
];
