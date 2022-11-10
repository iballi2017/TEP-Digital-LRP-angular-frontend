import { tassign } from 'tassign';
import {
  ADD_OCCUPANT,
  ADD_OCCUPANT_ERROR,
  ADD_OCCUPANT_SUCCESS,
  FETCH_OCCUPANTS_LIST,
  FETCH_OCCUPANTS_LIST_ERROR,
  FETCH_OCCUPANTS_LIST_SUCCESS,
  FETCH_SINGLE_OCCUPANT,
  FETCH_SINGLE_OCCUPANT_ERROR,
  FETCH_SINGLE_OCCUPANT_SUCCESS,
  REMOVE_OCCUPANT,
  REMOVE_OCCUPANT_ERROR,
  REMOVE_OCCUPANT_SUCCESS,
  UPDATE_OCCUPANT,
  UPDATE_OCCUPANT_ERROR,
  UPDATE_OCCUPANT_SUCCESS,
} from './occupant.actions';
import { INITIAL_OCCUPANT_STATE, LRP_OccupantState } from './occupant.store';

// FETCH occupantsList
const FetchOccupantsList = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const FetchOccupantsListSuccess = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    occupantsList: action?.payload,
    isLoading: false,
  });
};
const FetchOccupantsListFailure = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// FETCH SingleOccupant
const FetchSingleOccupant = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};
const FetchSingleOccupantSuccess = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    singleOccupant: action?.payload[0],
    isLoading: false,
  });
};
const FetchSingleOccupantFailure = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// ADD OCCUPANT

const AddOccupant = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const AddOccupantSuccess = (state: LRP_OccupantState, action: any) => {
  
  var newOccupant = {
    id: state.occupantsList?.length + 1,
    ...action.payload,
  };
  // var newOccupant = { id: action.todo.id, title: action.todo.title };

  return tassign(state, {
    occupantsList: action.payload,
    isLoading: false,
    // lastUpdate: new Date(),
  });
};

const AddOccupantFailure = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    error: action.payload,
    isLoading: false,
  });
};

// UPDATE HELLOWORLD
const UpdateOccupant = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    isLoading: true,
  });
};

const UpdateOccupantSuccess = (state: LRP_OccupantState, action: any) => {
  var occupantItem = state.occupantsList.find((t: any) => t.Id === action.Id);

  var index = state.occupantsList.indexOf(occupantItem);
  
  return tassign(state, {
    occupantsList: [
      ...state.occupantsList.slice(0, index),
      // tassign(occupantItem, { isCompleted: !occupantItem.isCompleted }),
      tassign(occupantItem, action.data.payload),
      ...state.occupantsList.slice(index + 1),
    ],
    isLoading: false,
  });
};
const UpdateOccupantFailure = (state: LRP_OccupantState, action: any) => {
  return tassign(state, {
    error: action.error,
    isLoading: false,
  });
};

export function OccupantReducer(
  state: LRP_OccupantState | any = INITIAL_OCCUPANT_STATE,
  action: any
): LRP_OccupantState {
  
  switch (action.type) {
    // FETCH_OCCUPANT_LIST
    case FETCH_OCCUPANTS_LIST:
      return FetchOccupantsList(state, action);
    case FETCH_OCCUPANTS_LIST_SUCCESS:
      return FetchOccupantsListSuccess(state, action);
    case FETCH_OCCUPANTS_LIST_ERROR:
      return FetchOccupantsListFailure(state, action);

    // FETCH_SINGLE_OCCUPANT
    case FETCH_SINGLE_OCCUPANT:
      return FetchSingleOccupant(state, action);
    case FETCH_SINGLE_OCCUPANT_SUCCESS:
      return FetchSingleOccupantSuccess(state, action);
      case FETCH_SINGLE_OCCUPANT_ERROR:
      return FetchSingleOccupantFailure(state, action);

    // ADD_OCCUPANT
    case ADD_OCCUPANT:
      return AddOccupant(state, action);
    case ADD_OCCUPANT_SUCCESS:
      return AddOccupantSuccess(state, action);
    case ADD_OCCUPANT_ERROR:
      return AddOccupantFailure(state, action);

    // UPDATE_OCCUPANT
    case UPDATE_OCCUPANT:
      return UpdateOccupant(state, action);
    case UPDATE_OCCUPANT_SUCCESS:
      return UpdateOccupantSuccess(state, action);
    case UPDATE_OCCUPANT_ERROR:
      return UpdateOccupantFailure(state, action);

    // REMOVE_OCCUPANT
    case REMOVE_OCCUPANT:
      return tassign(state, {
        isLoading: true,
      });

    case REMOVE_OCCUPANT_SUCCESS:
      return tassign(state, {
        occupantsList: state.occupantsList.filter(
          (t: any) => t.occ_id !== action.payload?.occ_id
        ),
        isLoading: false,
      });
    case REMOVE_OCCUPANT_ERROR:
      return tassign(state, {
        error: action.error,
        isLoading: false,
      });
  }
  return state;
}
// function uPDATEOccupantFailure(state: any, action: any): LRP_OccupantState {
//   throw new Error('Function not implemented.');
// }
