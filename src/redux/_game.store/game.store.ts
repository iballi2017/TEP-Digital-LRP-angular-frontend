export interface LRP_GameState {
  gameSession: any;
  gameResult: any;
  letteringStageThreeExerciseOne: any;
  error: any;
  //   lastUpdate: Date;
  isLoading: boolean;
}

export const INITIAL_GAME_STATE: LRP_GameState = {
  gameSession: null,
  gameResult: null,
  letteringStageThreeExerciseOne: null,
  error: null,
  isLoading: false,
};
