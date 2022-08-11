export interface LRP_OccupantState {
    occupantsList: any[];
    singleOccupant: {};
    error: any;
    isLoading: boolean;
  }
  
  export const INITIAL_OCCUPANT_STATE: LRP_OccupantState = {
    occupantsList: [],
    singleOccupant: {},
    error: null,
    isLoading: false,
  };
  