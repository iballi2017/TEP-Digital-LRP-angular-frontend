export interface LRP_UserDetailsState {
    userDetails: any[];
    error: any;
    isLoading: boolean;
  }
  
  export const INITIAL_USER_DETAILS_STATE: LRP_UserDetailsState = {
    userDetails: [],
    error: null,
    isLoading: false,
  };
  