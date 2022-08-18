import { GameSessionData } from '../types/game';

export class GameResult {
  result: any;
  constructor(result: any) {
    this.result = result;
  }
  save() {
    let x: any = sessionStorage.getItem(GameSessionData.result);
    let y = JSON.parse(x);
    let result = Object.assign(y, this.result);
    console.log('result: ', result);
    let z = JSON.stringify(result);
    sessionStorage.setItem(GameSessionData.result, z);
  }
}
