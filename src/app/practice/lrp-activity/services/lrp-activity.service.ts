import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LrpActivityService {
  constructor() {}

  alphabets = [
    {
      id: 1,
      name: 'a',
      isChecked: false,
      type: AlphabetType.VOWEL,
    },
    {
      id: 2,
      name: 'b',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
    {
      id: 3,
      name: 'c',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
    {
      id: 4,
      name: 'd',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
    {
      id: 5,
      name: 'e',
      isChecked: true,
      type: AlphabetType.VOWEL,
    },
    {
      id: 6,
      name: 'f',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
    {
      id: 7,
      name: 'g',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
    {
      id: 8,
      name: 'h',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
    {
      id: 9,
      name: 'i',
      isChecked: false,
      type: AlphabetType.VOWEL,
    },
    {
      id: 10,
      name: 'j',
      isChecked: false,
      type: AlphabetType.CONSONANT,
    },
  ];

  GetAlphabet() {
    return this.alphabets;
  }
}

export interface Alphabet {
  id: number;
  name: string;
  isChecked: boolean;
  type: string;
}

export enum AlphabetType {
  VOWEL = 'VOWEL',
  CONSONANT = 'CONSONANT',
}
