export interface LRP_LoginUserState {
  LoginUser: any[];
  error: any;
  lastlogin: Date;
  isLoading: boolean;
}

export const INITIAL_LOGINUSER_STATE: LRP_LoginUserState = {
  LoginUser: [],
  error: null,
  lastlogin: new Date(),
  isLoading: false,
};
