export interface LRP_GameState {
  gameSession: any;
  gameResult: any;
  error: any;
  //   lastUpdate: Date;
  isLoading: boolean;
}

export const INITIAL_GAME_STATE: LRP_GameState = {
  gameSession: null,
  gameResult: null,
  error: null,
  //   lastUpdate: new Date(),
  isLoading: false,
};
