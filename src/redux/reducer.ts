import { combineReducers } from 'redux';
import { LoginUserReducer } from './_login-user-store/login-user.reducer';
import { OccupantReducer } from './_occupant.store/occupant.reducer';
import { RegisterUserReducer } from './_register-user-store/register-user.reducer';
import { ReportReducer } from './_report.store/report.reducer';
import { UserDetailsReducer } from './_userDetails.store/user-details.reducer';

export const rootReducer = combineReducers({
  LoginUser: LoginUserReducer,
  RegisterUser: RegisterUserReducer,
  occupantsList: OccupantReducer,
  userDetails: UserDetailsReducer,
  reportsList: ReportReducer,
});
