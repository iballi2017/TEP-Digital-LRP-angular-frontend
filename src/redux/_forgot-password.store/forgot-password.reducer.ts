import { tassign } from 'tassign';
import {
  SEND_REGISTERED_EMAIL,
  SEND_REGISTERED_EMAIL_ERROR,
  SEND_REGISTERED_EMAIL_SUCCESS,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PASSWORD_ERROR,
  UPDATE_USER_PASSWORD_SUCCESS,
} from './forgot-password.actions';
import {
  INITIAL_FORGOTPASSWORD_STATE,
  LRP_ForgotPasswordState,
} from './forgot-password.store';

// SEND REGISTERED EMAIL
const SendRegisteredEmail = (state: LRP_ForgotPasswordState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const SendRegisteredEmailSuccess = (
  state: LRP_ForgotPasswordState,
  action: any
) => {
  console.log('action*****: ', action);

  return tassign(state, {
    error: null,
    sendRegisteredEmailResponse: action.payload,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};
const SendRegisteredEmailFailure = (
  state: LRP_ForgotPasswordState,
  action: any
) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// UPDATE USER PASSWORD
const UpdateUserPassword = (state: LRP_ForgotPasswordState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const UpdateUserPasswordSuccess = (
  state: LRP_ForgotPasswordState,
  action: any
) => {
  console.log('action*****: ', action);
  return tassign(state, {
    error: null,
    updateUserPasswordResponse: action.payload,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};
const UpdateUserPasswordFailure = (
  state: LRP_ForgotPasswordState,
  action: any
) => {
  return tassign(state, {
    updateUserPasswordResponse: null,
    error: action.payload,
    isLoading: false,
  });
};

export function ForgotPasswordReducer(
  state: LRP_ForgotPasswordState | any = INITIAL_FORGOTPASSWORD_STATE,
  action: any
): LRP_ForgotPasswordState {
  console.log('ACTION: ', action);
  switch (action.type) {
    // ADD_REPORT
    case SEND_REGISTERED_EMAIL:
      return SendRegisteredEmail(state, action);
    case SEND_REGISTERED_EMAIL_SUCCESS:
      return SendRegisteredEmailSuccess(state, action);
    case SEND_REGISTERED_EMAIL_ERROR:
      return SendRegisteredEmailFailure(state, action);
    // UPDATE_USER_PASSWORD
    case UPDATE_USER_PASSWORD:
      return UpdateUserPassword(state, action);
    case UPDATE_USER_PASSWORD_SUCCESS:
      return UpdateUserPasswordSuccess(state, action);
    case UPDATE_USER_PASSWORD_ERROR:
      return UpdateUserPasswordFailure(state, action);
  }
  return state;
}
// function uPDATEReportFailure(state: any, action: any): LRP_ForgotPasswordState {
//   throw new Error('Function not implemented.');
// }
