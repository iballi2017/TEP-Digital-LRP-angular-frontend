import { Injectable } from '@angular/core';
import { alphabets } from 'src/assets/data/lettering-stage-alphabets';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor() {}
  GetAlphabet() {
    return alphabets;
  }

  GetStageTwoAlphabet() {
    return alphabets;
  }
}
