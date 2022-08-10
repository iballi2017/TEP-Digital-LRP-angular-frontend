export interface LRP_OccupantState {
    occupantsList: any[];
    error: any;
    isLoading: boolean;
  }
  
  export const INITIAL_OCCUPANT_STATE: LRP_OccupantState = {
    occupantsList: [],
    error: null,
    isLoading: false,
  };
  