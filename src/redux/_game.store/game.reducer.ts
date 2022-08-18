import { GameSessionData } from 'src/app/models/types/game';
import { tassign } from 'tassign';
import {
  ADD_GAME_SESSION,
  ADD_GAME_SESSION_ERROR,
  ADD_GAME_SESSION_SUCCESS,
  FETCH_GAME_SESSION,
  FETCH_GAME_SESSION_ERROR,
  FETCH_GAME_SESSION_SUCCESS,
} from './game.actions';
import { INITIAL_GAME_STATE, JID_GameState } from './game.store';

// ADD OCCUPANT

const AddGameSession = (state: JID_GameState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const AddGameSessionSuccess = (state: JID_GameState, action: any) => {
  console.log('action*****: ', action);
  var newGameSession = {
    // id: state.reportsList?.length + 1,
    id: new Date().getTime().toString(),
    ...action.payload,
  };
  // var newGameSession = { id: action.todo.id, title: action.todo.title };
  console.log('newGameSession*****: ', newGameSession);
  let sessionData = JSON.stringify(newGameSession);
  localStorage.setItem(GameSessionData.name, sessionData);
  sessionStorage.setItem(GameSessionData.name, sessionData);
  const gameResult = {}
  let result = JSON.stringify(gameResult);
  localStorage.setItem(GameSessionData.result, result);
  sessionStorage.setItem(GameSessionData.result, result);

  return tassign(state, {
    // gameSession: action.payload,
    gameSession: newGameSession,
    gameResult: gameResult,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};

const AddGameSessionFailure = (state: JID_GameState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

export function GameReducer(
  state: JID_GameState | any = INITIAL_GAME_STATE,
  action: any
): JID_GameState {
  switch (action.type) {
    case FETCH_GAME_SESSION:
      console.log('load gameSession action: ', action);
      return tassign(state, {
        isLoading: true,
      });
    case FETCH_GAME_SESSION_SUCCESS:
      console.log('load gameSession action: ', action);
      return tassign(state, {
        gameSession: action.payload,
        isLoading: false,
      });

    case FETCH_GAME_SESSION_ERROR:
      console.log('load gameSession action: ', action);
      return tassign(state, {
        error: action.payload,
      });

    // ADD_GAME_SESSION
    case ADD_GAME_SESSION:
      return AddGameSession(state, action);
    case ADD_GAME_SESSION_SUCCESS:
      return AddGameSessionSuccess(state, action);
    case ADD_GAME_SESSION_ERROR:
      return AddGameSessionFailure(state, action);
  }
  return state;
}
