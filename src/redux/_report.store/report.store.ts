export interface LRP_ReportState {
    reportsList: any[];
    singleReport: {};
    error: any;
    isLoading: boolean;
  }
  
  export const INITIAL_REPORT_STATE: LRP_ReportState = {
    reportsList: [],
    singleReport: {},
    error: null,
    isLoading: false,
  };
  