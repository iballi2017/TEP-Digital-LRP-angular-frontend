import {
  INITIAL_LOGINUSER_STATE,
  LRP_LoginUserState,
} from './_login-user-store/login-user.store';
import {
  INITIAL_REGISTERUSER_STATE,
  LRP_RegisterUserState,
} from './_register-user-store/register-user.store';

export interface IAppState {
  LoginUser: LRP_LoginUserState;
  RegisterUser: LRP_RegisterUserState;
}

export const INITIAL_STATE: IAppState = {
  LoginUser: INITIAL_LOGINUSER_STATE,
  RegisterUser: INITIAL_REGISTERUSER_STATE,
};
