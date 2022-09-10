import { Injectable } from '@angular/core';
import { alphabets } from 'src/assets/data/lettering-stage-alphabets';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor() {}
  GetAlphabet() {
    let x = [...alphabets]
    return x;
  }

  GetStageTwoAlphabet() {
    return alphabets;
  }
}
