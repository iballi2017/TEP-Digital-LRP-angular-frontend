import { tassign } from 'tassign';
import {
  ADD_LOGINUSER,
  ADD_LOGINUSER_FAILURE,
  ADD_LOGINUSER_SUCCESS,
  FETCH_LOGINUSER,
  FETCH_LOGINUSER_FAILURE,
  FETCH_LOGINUSER_SUCCESS,
} from './login-user.actions';
import {
  INITIAL_LOGINUSER_STATE,
  LRP_LoginUserState,
} from './login-user.store';

export function LoginUserReducer(
  state: LRP_LoginUserState | any = INITIAL_LOGINUSER_STATE,
  action: any
): LRP_LoginUserState {
  switch (action.type) {
    case FETCH_LOGINUSER:
      return tassign(state, {
        isLoading: true,
      });

    case FETCH_LOGINUSER_SUCCESS:
      return tassign(state, {
        LoginUser: action.User,
        isLoading: false,
      });

    case FETCH_LOGINUSER_FAILURE:
      return tassign(state, {
        error: action.error,
      });

    //
    // ADD LOGINUSER
    case ADD_LOGINUSER:
      return tassign(state, {
        isLoading: true,
      });
    case ADD_LOGINUSER_SUCCESS:
      // var newTodo = { id: state.todos.length + 1, title: action.title };
      var newLoginUser = action.payload;
      return tassign(state, {
        // Instead of the push() method, we use the concat() method because the former mutates
        // the original array, whereas the latter returns a new array.
        LoginUser: newLoginUser,
        lastUpdate: new Date(),
        isLoading: false,
      });
    case ADD_LOGINUSER_FAILURE:
      return tassign(state, {
        error: action.payload,
        isLoading: false,
      });
  }
  return state;
}
