
import {
  FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST,
  FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR,
  FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS,
} from './game-level-result-and-rating.actions';
import { INITIAL_GAME_LEVEL_RESULT_AND_RATING_STATE, LRP_GameLevelResultAndRatingState } from './game-level-result-and-rating.store';
import { FetchGameLevelResultAndRatingList, FetchGameLevelResultAndRatingListFailure, FetchGameLevelResultAndRatingListSuccess } from './game-level-result-and-rating.functions';




export function GameLevelResultAndRatingReducer(
  state: LRP_GameLevelResultAndRatingState | any = INITIAL_GAME_LEVEL_RESULT_AND_RATING_STATE,
  action: any
): LRP_GameLevelResultAndRatingState {
  
  switch (action.type) {
    // FETCH_OCCUPANT_LIST
    case FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST:
      return FetchGameLevelResultAndRatingList(state, action);
    case FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_SUCCESS:
      return FetchGameLevelResultAndRatingListSuccess(state, action);
    case FETCH_GAME_LEVEL_RESULT_AND_RATING_LIST_ERROR:
      return FetchGameLevelResultAndRatingListFailure(state, action);
  }
  return state;
}
