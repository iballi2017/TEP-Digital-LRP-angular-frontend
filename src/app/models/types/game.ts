export interface Game {}

export interface StartGame {
  occ_id: string;
  game_type: string;
}

<<<<<<< HEAD
// export enum GameType {
//   Literacy = 'Literacy',
// }
=======
export enum GameType {
  Literacy = 'Literacy',
}
>>>>>>> 50ad5a9812f952349aefdef42bd6bfbde39669c4

export enum GameSessionData {
  name = 'sessionData',
  result = 'stage-result',
}

export interface GameStageResult {
  session_id: string;
  result: any;
}

export interface LetteringStageOneResult {
  session_id: string;
  answer: string;
  data: [];
}
