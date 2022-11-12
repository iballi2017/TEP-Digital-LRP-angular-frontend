import { combineReducers } from 'redux';
import { ForgotPasswordReducer } from './_forgot-password.store/forgot-password.reducer';
import { GameLevelResultAndRatingReducer } from './_game-level-result-and-rating.store/game-level-result-and-rating.reducer';
import { GameReducer } from './_game.store/game.reducer';
import { LoginUserReducer } from './_login-user-store/login-user.reducer';
import { OccupantReducer } from './_occupant.store/occupant.reducer';
import { RegisterUserReducer } from './_register-user-store/register-user.reducer';
import { ReportReducer } from './_report.store/report.reducer';
import { SpeechToTextReducer } from './_speechToText.store/speechToText.reducer';
import { UserDetailsReducer } from './_userDetails.store/user-details.reducer';

export const rootReducer = combineReducers({
  LoginUser: LoginUserReducer,
  RegisterUser: RegisterUserReducer,
  occupantsList: OccupantReducer,
  userDetails: UserDetailsReducer,
  reportsList: ReportReducer,
  game: GameReducer,
  forgotPassword: ForgotPasswordReducer,
  SpeechTexts: SpeechToTextReducer,
  gameLevelResultAndRating: GameLevelResultAndRatingReducer
});
