export interface LRP_ForgotPasswordState {
  sendRegisteredEmailResponse: any;
  updateUserPasswordResponse: any;
  error: any;
  isLoading: boolean;
}

export const INITIAL_FORGOTPASSWORD_STATE: LRP_ForgotPasswordState = {
  sendRegisteredEmailResponse: null,
  updateUserPasswordResponse: null,
  error: null,
  isLoading: false,
};
