import { GameSessionData } from 'src/app/models/types/game';
import { tassign } from 'tassign';
import { LRP_GameState } from './game.store';

// FETCH GAME SESSION
export const FetchGameSession = (state: LRP_GameState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

export const FetchGameSessionSuccess = (state: LRP_GameState, action: any) => {
  return tassign(state, {
    gameSession: action.payload,
    isLoading: false,
  });
};

export const FetchGameSessionFailure = (state: LRP_GameState, action: any) => {
  return tassign(state, {
    error: action.payload,
  });
};

// ADD GAME SESSION
export const AddGameSession = (state: LRP_GameState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

export const AddGameSessionSuccess = (state: LRP_GameState, action: any) => {
  
  var newGameSession = {
    // id: state.reportsList?.length + 1,
    id: new Date().getTime().toString(),
    ...action.payload,
  };
  let sessionData = JSON.stringify(newGameSession);
  // localStorage.setItem(GameSessionData.name, sessionData);
  localStorage.setItem(GameSessionData.name, sessionData);
  const gameResult = {};
  let result = JSON.stringify(gameResult);
  // localStorage.setItem(GameSessionData.result, result);
  localStorage.setItem(GameSessionData.result, result);

  return tassign(state, {
    // gameSession: action.payload,
    gameSession: newGameSession,
    gameResult: gameResult,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};

export const AddGameSessionFailure = (state: LRP_GameState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

// SUBMIT GAME STAGE RESULT
export const SubmitGameStageResult = (state: LRP_GameState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

export const SubmitGameStageResultSuccess = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    gameResult: action.payload,
    isLoading: false,
  });
};

export const SubmitGameStageResultFailure = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// ADD_LETTERING_STAGE_THREE_EXERCISE_ONE
export const AddLetteringStageThreeExerciseOne = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    isLoading: true,
  });
};
export const AddLetteringStageThreeExerciseOneSuccess = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    letteringStageThreeExerciseOne: action.payload,
    isLoading: false,
  });
};
export const AddLetteringStageThreeExerciseFailure = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};



// FETCH_LETTERING_STAGE_THREE_EXERCISE_ONE
export const FetchLetteringStageThreeExerciseOne = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    isLoading: true,
  });
};
export const FetchLetteringStageThreeExerciseOneSuccess = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    letteringStageThreeExerciseOne: action.payload,
    isLoading: false,
  });
};
export const FetchLetteringStageThreeExerciseFailure = (
  state: LRP_GameState,
  action: any
) => {
  return tassign(state, {
    isLoading: false,
    error: action.payload
  });
};
