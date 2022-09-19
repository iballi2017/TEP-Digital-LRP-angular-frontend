import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlphabetType } from '../models/types/alphabet';

@Injectable({
  providedIn: 'root'
})
export class StageOneActivityService {

  alphabetsList:any = [];

  constructor(private _http: HttpClient) { }
  
  GetAlphabetList() {
    this.alphabetsList = [...alphabets];
    return   this.alphabetsList;
  }


}




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

