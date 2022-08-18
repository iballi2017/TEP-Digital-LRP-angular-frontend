export interface Game {}

export interface StartGame {
  occ_id: string;
  game_type: string;
}

export enum GameType {
  Literacy = 'Literacy',
}

export enum GameSessionData {
  name = 'sessionData',
  result = 'result'
}
