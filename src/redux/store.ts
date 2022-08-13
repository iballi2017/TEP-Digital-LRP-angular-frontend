import {
  INITIAL_LOGINUSER_STATE,
  LRP_LoginUserState,
} from './_login-user-store/login-user.store';
import {
  INITIAL_OCCUPANT_STATE,
  LRP_OccupantState,
} from './_occupant.store/occupant.store';
import {
  INITIAL_REGISTERUSER_STATE,
  LRP_RegisterUserState,
} from './_register-user-store/register-user.store';
import { INITIAL_REPORT_STATE, LRP_ReportState } from './_report.store/report.store';
import {
  INITIAL_USER_DETAILS_STATE,
  LRP_UserDetailsState,
} from './_userDetails.store/user-details.store';

export interface IAppState {
  LoginUser: LRP_LoginUserState;
  RegisterUser: LRP_RegisterUserState;
  occupantsList: LRP_OccupantState;
  userDetails: LRP_UserDetailsState;
  reportsList: LRP_ReportState;
}

export const INITIAL_STATE: IAppState = {
  LoginUser: INITIAL_LOGINUSER_STATE,
  RegisterUser: INITIAL_REGISTERUSER_STATE,
  occupantsList: INITIAL_OCCUPANT_STATE,
  userDetails: INITIAL_USER_DETAILS_STATE,
  reportsList: INITIAL_REPORT_STATE
};
