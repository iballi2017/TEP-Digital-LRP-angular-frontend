export interface JID_GameState {
  gameSession: any;
  gameResult: any;
  error: any;
  //   lastUpdate: Date;
  isLoading: boolean;
}

export const INITIAL_GAME_STATE: JID_GameState = {
  gameSession: null,
  gameResult: null,
  error: null,
  //   lastUpdate: new Date(),
  isLoading: false,
};
