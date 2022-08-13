import { tassign } from 'tassign';
import {
  ADD_REPORT,
  ADD_REPORT_ERROR,
  ADD_REPORT_SUCCESS,
  FETCH_REPORTS_LIST,
  FETCH_REPORTS_LIST_ERROR,
  FETCH_REPORTS_LIST_SUCCESS,
  FETCH_SINGLE_REPORT,
  FETCH_SINGLE_REPORT_ERROR,
  FETCH_SINGLE_REPORT_SUCCESS,
  REMOVE_REPORT,
  REMOVE_REPORT_ERROR,
  REMOVE_REPORT_SUCCESS,
  UPDATE_REPORT,
  UPDATE_REPORT_ERROR,
  UPDATE_REPORT_SUCCESS,
} from './report.actions';
import { INITIAL_REPORT_STATE, LRP_ReportState } from './report.store';

// FETCH reportsList
const FetchReportsList = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const FetchReportsListSuccess = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    reportsList: action?.payload,
    isLoading: false,
  });
};
const FetchReportsListFailure = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// FETCH SingleReport
const FetchSingleReport = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const FetchSingleReportSuccess = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    singleReport: action?.payload[0],
    isLoading: false,
  });
};
const FetchSingleReportFailure = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// ADD OCCUPANT

const AddOccupant = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const AddOccupantSuccess = (state: LRP_ReportState, action: any) => {
  console.log('action*****: ', action);
  var newReport = {
    id: state.reportsList?.length + 1,
    ...action.payload,
  };
  // var newReport = { id: action.todo.id, title: action.todo.title };
  console.log('newReport*****: ', newReport);

  return tassign(state, {
    reportsList: action.payload,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};

const AddOccupantFailure = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

// UPDATE HELLOWORLD
const UpdateReport = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const UpdateReportSuccess = (state: LRP_ReportState, action: any) => {
  var occupantItem = state.reportsList.find((t: any) => t.Id === action.Id);

  var index = state.reportsList.indexOf(occupantItem);
  console.log('action: ', action);
  return tassign(state, {
    reportsList: [
      ...state.reportsList.slice(0, index),
      // tassign(occupantItem, { isCompleted: !occupantItem.isCompleted }),
      tassign(occupantItem, action.data.payload),
      ...state.reportsList.slice(index + 1),
    ],
    isLoading: false,
  });
};
const UpdateReportFailure = (state: LRP_ReportState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

export function ReportReducer(
  state: LRP_ReportState | any = INITIAL_REPORT_STATE,
  action: any
): LRP_ReportState {
  console.log('ACTION: ', action);
  switch (action.type) {
    // FETCH_REPORT_LIST
    case FETCH_REPORTS_LIST:
      return FetchReportsList(state, action);
    case FETCH_REPORTS_LIST_SUCCESS:
      return FetchReportsListSuccess(state, action);
    case FETCH_REPORTS_LIST_ERROR:
      return FetchReportsListFailure(state, action);

    // FETCH_SINGLE_REPORT
    case FETCH_SINGLE_REPORT:
      return FetchSingleReport(state, action);
    case FETCH_SINGLE_REPORT_SUCCESS:
      return FetchSingleReportSuccess(state, action);
    case FETCH_SINGLE_REPORT_ERROR:
      return FetchSingleReportFailure(state, action);

    // ADD_REPORT
    case ADD_REPORT:
      return AddOccupant(state, action);
    case ADD_REPORT_SUCCESS:
      return AddOccupantSuccess(state, action);
    case ADD_REPORT_ERROR:
      return AddOccupantFailure(state, action);

    // UPDATE_REPORT
    case UPDATE_REPORT:
      return UpdateReport(state, action);
    case UPDATE_REPORT_SUCCESS:
      return UpdateReportSuccess(state, action);
    case UPDATE_REPORT_ERROR:
      return UpdateReportFailure(state, action);

    // REMOVE_REPORT
    case REMOVE_REPORT:
      console.log("action: ", action);
      return tassign(state, {
        isLoading: true,
      });

    case REMOVE_REPORT_SUCCESS:
      console.log("action: ", action);
      return tassign(state, {
        reportsList: state.reportsList.filter(
          (t: any) => t.id !== action.payload?.id
        ),
        isLoading: false,
      });
    case REMOVE_REPORT_ERROR:
      return tassign(state, {
        error: action.payload,
        isLoading: false,
      });
  }
  return state;
}
// function uPDATEReportFailure(state: any, action: any): LRP_ReportState {
//   throw new Error('Function not implemented.');
// }
