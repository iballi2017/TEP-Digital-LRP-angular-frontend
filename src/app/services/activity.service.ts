import { Injectable } from '@angular/core';
// import { alphabets } from 'src/assets/data/lettering-stage-alphabets';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  alphabetsList:any = [];
  constructor() {}
  // GetAlphabet() {
  //   this.alphabetsList = [...alphabets];
  //   return   this.alphabetsList;
  // }


  // GetAlphabetForStageTwo() {
  //   this.alphabetsList = [...alphabets];
  //   return   this.alphabetsList;
  // }

  // GetStageTwoAlphabet() {
  //   return this.alphabetsList;
  // }
}
