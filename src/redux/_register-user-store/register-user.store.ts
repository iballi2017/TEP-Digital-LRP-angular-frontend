export interface LRP_RegisterUserState {
  RegisteredUser: any;
  error: any;
  lastlogin: Date;
  isLoading: boolean;
}

export const INITIAL_REGISTERUSER_STATE: LRP_RegisterUserState = {
  RegisteredUser: null,
  error: null,
  lastlogin: new Date(),
  isLoading: false,
};
