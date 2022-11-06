import { GameSessionData } from '../types/game';

export class GameResult {
  result: any;
  constructor(result: any) {
    this.result = result;
  }
  save() {
    let x: any = localStorage.getItem(GameSessionData.result);
    let y = JSON.parse(x);
    let result = Object.assign(y, this.result);
    
    let z = JSON.stringify(result);
    localStorage.setItem(GameSessionData.result, z);
  }
}
