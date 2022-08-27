export interface LRP_ReportState {
  reportsList: any[];
  singleReport: {};
  gameResultDetails: {};
  error: any;
  isLoading: boolean;
}

export const INITIAL_REPORT_STATE: LRP_ReportState = {
  reportsList: [],
  singleReport: {},
  gameResultDetails: {},
  error: null,
  isLoading: false,
};
