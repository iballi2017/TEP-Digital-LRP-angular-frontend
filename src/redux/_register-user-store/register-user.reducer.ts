import { tassign } from 'tassign';
import {
  ADD_REGISTER_USER,
  ADD_REGISTER_USER_FAILURE,
  ADD_REGISTER_USER_SUCCESS,
  FETCH_REGISTER_USER,
  FETCH_REGISTER_USER_FAILURE,
  FETCH_REGISTER_USER_SUCCESS,
} from './register-user.actions';
import {
  INITIAL_REGISTERUSER_STATE,
  LRP_RegisterUserState,
} from './register-user.store';

export function RegisterUserReducer(
  state: LRP_RegisterUserState | any = INITIAL_REGISTERUSER_STATE,
  action: any
): LRP_RegisterUserState {
  console.log('load registerUser action: ', action);
  switch (action.type) {
    case FETCH_REGISTER_USER:
      console.log('load registerUser action: ', action);
      return tassign(state, {
        isLoading: true,
      });

    case FETCH_REGISTER_USER_SUCCESS:
      console.log('load registerUser action: ', action);
      return tassign(state, {
        RegisteredUser: action.User,
        isLoading: false,
      });

    case FETCH_REGISTER_USER_FAILURE:
      console.log('load registerUser action: ', action);
      return tassign(state, {
        error: action.error,
      });

    //
    // ADD registerUSER
    case ADD_REGISTER_USER:
      return tassign(state, {
        isLoading: true,
      });
    case ADD_REGISTER_USER_SUCCESS:
      console.log('action*****: ', action);
      var newRegisterUser = action.payload;
      console.log('newRegisterUser*****: ', newRegisterUser);

      return tassign(state, {
        RegisteredUser: newRegisterUser,
        lastUpdate: new Date(),
        isLoading: false,
      });
    case ADD_REGISTER_USER_FAILURE:
      console.log('add registerUser action: ', action);
      return tassign(state, {
        error: action.payload,
        isLoading: false,
      });
  }
  return state;
}
