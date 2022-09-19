import { GameSessionData } from 'src/app/models/types/game';
import { tassign } from 'tassign';
import {
  ADD_GAME_SESSION,
  ADD_GAME_SESSION_ERROR,
  ADD_GAME_SESSION_SUCCESS,
  ADD_LETTERING_STAGE_THREE_EXERCISE_ONE,
  ADD_LETTERING_STAGE_THREE_EXERCISE_ONE_ERROR,
  ADD_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS,
  FETCH_GAME_SESSION,
  FETCH_GAME_SESSION_ERROR,
  FETCH_GAME_SESSION_SUCCESS,
  FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE,
  FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_ERROR,
  FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS,
  SUBMIT_GAME_STAGE_RESULT,
  SUBMIT_GAME_STAGE_RESULT_ERROR,
  SUBMIT_GAME_STAGE_RESULT_SUCCESS,
} from './game.actions';
import {
  AddGameSession,
  AddGameSessionFailure,
  AddGameSessionSuccess,
  AddLetteringStageThreeExerciseOne,
  AddLetteringStageThreeExerciseOneSuccess,
  FetchGameSession,
  FetchGameSessionFailure,
  FetchGameSessionSuccess,
  FetchLetteringStageThreeExerciseOne,
  FetchLetteringStageThreeExerciseOneSuccess,
  SubmitGameStageResult,
  SubmitGameStageResultFailure,
  SubmitGameStageResultSuccess,
} from './game.function';
import { INITIAL_GAME_STATE, LRP_GameState } from './game.store';

export function GameReducer(
  state: LRP_GameState | any = INITIAL_GAME_STATE,
  action: any
): LRP_GameState {
  switch (action.type) {
    // FETCH_GAME_SESSION
    case FETCH_GAME_SESSION:
      return FetchGameSession(state, action);
    case FETCH_GAME_SESSION_SUCCESS:
      return FetchGameSessionSuccess(state, action);
    case FETCH_GAME_SESSION_ERROR:
      return FetchGameSessionFailure(state, action);

    // ADD_GAME_SESSION
    case ADD_GAME_SESSION:
      return AddGameSession(state, action);
    case ADD_GAME_SESSION_SUCCESS:
      return AddGameSessionSuccess(state, action);
    case ADD_GAME_SESSION_ERROR:
      return AddGameSessionFailure(state, action);

    // ADD_GAME_SESSION
    case SUBMIT_GAME_STAGE_RESULT:
      return SubmitGameStageResult(state, action);
    case SUBMIT_GAME_STAGE_RESULT_SUCCESS:
      return SubmitGameStageResultSuccess(state, action);
    case SUBMIT_GAME_STAGE_RESULT_ERROR:
      return SubmitGameStageResultFailure(state, action);

    // ADD_LETTERING_STAGE_THREE_EXERCISE_ONE
    case ADD_LETTERING_STAGE_THREE_EXERCISE_ONE:
      return AddLetteringStageThreeExerciseOne(state, action);
    case ADD_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS:
      return AddLetteringStageThreeExerciseOneSuccess(state, action);
    case ADD_LETTERING_STAGE_THREE_EXERCISE_ONE_ERROR:
      return AddLetteringStageThreeExerciseOne(state, action);

    // FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE
    case FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE:
      return FetchLetteringStageThreeExerciseOne(state, action);
    case FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_SUCCESS:
      return FetchLetteringStageThreeExerciseOneSuccess(state, action);
    case FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE_ERROR:
      return FetchLetteringStageThreeExerciseOne(state, action);
  }
  return state;
}
