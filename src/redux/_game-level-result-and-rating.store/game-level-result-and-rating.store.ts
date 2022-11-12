export interface LRP_GameLevelResultAndRatingState {
    gameLevelResultAndRating: any[];
    error: any;
    isLoading: boolean;
  }
  
  export const INITIAL_GAME_LEVEL_RESULT_AND_RATING_STATE: LRP_GameLevelResultAndRatingState = {
    gameLevelResultAndRating: [],
    error: null,
    isLoading: false,
  };
  