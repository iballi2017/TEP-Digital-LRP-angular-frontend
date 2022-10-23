import { tassign } from 'tassign';
import {
  ADD_USER_DETAILS,
  ADD_USER_DETAILS_ERROR,
  ADD_USER_DETAILS_SUCCESS,
  FETCH_USER_DETAILS,
  FETCH_USER_DETAILS_ERROR,
  FETCH_USER_DETAILS_SUCCESS,
  REMOVE_USER_DETAILS,
  REMOVE_USER_DETAILS_ERROR,
  REMOVE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_ERROR,
  UPDATE_USER_DETAILS_SUCCESS,
} from './user-details.actions';
import {
  INITIAL_USER_DETAILS_STATE,
  LRP_UserDetailsState,
} from './user-details.store';

// FETCH UserDetails
const FetchUserDetailsList = (state: LRP_UserDetailsState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const FetchUserDetailsListSuccess = (
  state: LRP_UserDetailsState,
  action: any
) => {
  return tassign(state, {
    userDetails: action?.payload,
    isLoading: false,
  });
};
const FetchUserDetailsListFailure = (
  state: LRP_UserDetailsState,
  action: any
) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// ADD UserDetails

const AddUserDetails = (state: LRP_UserDetailsState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const AddUserDetailsSuccess = (state: LRP_UserDetailsState, action: any) => {
  
  var newUserDetails = {
    id: state.userDetails?.length + 1,
    ...action.payload,
  };
  // var newUserDetails = { id: action.todo.id, title: action.todo.title };
  

  return tassign(state, {
    userDetails: action.payload,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};

const AddUserDetailsFailure = (state: LRP_UserDetailsState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

// UPDATE HELLOWORLD
const UpdateUserDetails = (state: LRP_UserDetailsState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const UpdateUserDetailsSuccess = (state: LRP_UserDetailsState, action: any) => {
  // var userItem = state.userDetails.find((t: any) => t.Id === action.Id);

  // var index = state.userDetails.indexOf(userItem);
  
  // return tassign(state, {
  //   userDetails:
  //     tassign({...state.userDetails}, action.payload),
  //   isLoading: false,
  // });
  let x = tassign(state, {
    userDetails: Object.assign({ ...state.userDetails }, action.payload.data),
    isLoading: false,
  });
  localStorage.setItem('currentUserData', JSON.stringify(x.userDetails));
  return x;
};
const UpdateUserDetailsFailure = (state: LRP_UserDetailsState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

export function UserDetailsReducer(
  state: LRP_UserDetailsState | any = INITIAL_USER_DETAILS_STATE,
  action: any
): LRP_UserDetailsState {
  switch (action.type) {
    // FETCH_USER_DETAILS_LIST
    case FETCH_USER_DETAILS:
      return FetchUserDetailsList(state, action);
    case FETCH_USER_DETAILS_SUCCESS:
      return FetchUserDetailsListSuccess(state, action);

    case FETCH_USER_DETAILS_ERROR:
      return FetchUserDetailsListFailure(state, action);

    // ADD_USER_DETAILS
    case ADD_USER_DETAILS:
      return AddUserDetails(state, action);
    case ADD_USER_DETAILS_SUCCESS:
      return AddUserDetailsSuccess(state, action);
    case ADD_USER_DETAILS_ERROR:
      return AddUserDetailsFailure(state, action);

    // UPDATE_USER_DETAILS
    case UPDATE_USER_DETAILS:
      return UpdateUserDetails(state, action);
    case UPDATE_USER_DETAILS_SUCCESS:
      return UpdateUserDetailsSuccess(state, action);
    case UPDATE_USER_DETAILS_ERROR:
      return UpdateUserDetailsFailure(state, action);

    // REMOVE_USER_DETAILS
    case REMOVE_USER_DETAILS:
      return tassign(state, {
        isLoading: true,
      });

    case REMOVE_USER_DETAILS_SUCCESS:
      return tassign(state, {
        userDetails: action.payload,
        isLoading: false,
      });
    case REMOVE_USER_DETAILS_ERROR:
      return tassign(state, {
        error: action.payload,
        isLoading: false,
      });
  }
  return state;
}
