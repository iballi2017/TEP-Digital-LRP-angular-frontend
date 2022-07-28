import { combineReducers } from 'redux';
import { LoginUserReducer } from './_login-user-store/login-user.reducer';
import { RegisterUserReducer } from './_register-user-store/register-user.reducer';

export const rootReducer = combineReducers({
  LoginUser: LoginUserReducer,
  RegisterUser: RegisterUserReducer,
});
