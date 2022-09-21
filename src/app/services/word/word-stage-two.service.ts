import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WordStageTwoService {
  constructor() {}

  GetActionwords() {
    let wordsList = [...actionwords];
    return wordsList;
  }

  GetResultwords() {
    let wordsList = [...resultWords];
    return wordsList;
  }
  // GetresultLetterWords() {
  //   let wordsList = [...resultLetterWords];
  //   return wordsList;
  // }
}

export const actionwords = [
  {
    name: 'Classroom',
    isChecked: false,
  },
  {
    name: 'Duster',
    isChecked: false,
  },
  {
    name: 'Juice',
    isChecked: false,
  },
  {
    name: 'Desk',
    isChecked: false,
  },
  {
    name: 'Coca',
    isChecked: false,
  },
  {
    name: 'Blackboard',
    isChecked: false,
  },
  {
    name: 'Cassava',
    isChecked: false,
  },
  {
    name: 'Chair',
    isChecked: false,
  },
];

export const resultWords= [
  {
    name: 'Duster',
    isChecked: false,
  },
  {
    name: 'Desk',
    isChecked: false,
  },
  {
    name: 'Blackboard',
    isChecked: false,
  },
  {
    name: 'Chair',
    isChecked: false,
  },
  {
    name: 'Classroom',
    isChecked: false,
  }
]
