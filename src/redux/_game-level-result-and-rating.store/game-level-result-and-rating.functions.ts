import { tassign } from 'tassign';
import { LRP_GameLevelResultAndRatingState } from './game-level-result-and-rating.store';

// FETCH occupantsList
export const FetchGameLevelResultAndRatingList = (state: LRP_GameLevelResultAndRatingState, action: any) => {
    return tassign(state, {
        isLoading: true,
    });
};
export const FetchGameLevelResultAndRatingListSuccess = (state: LRP_GameLevelResultAndRatingState, action: any) => {
    console.log("action: ", action)
    return tassign(state, {
        gameLevelResultAndRating: action?.payload,
        isLoading: false,
    });
};
export const FetchGameLevelResultAndRatingListFailure = (state: LRP_GameLevelResultAndRatingState, action: any) => {
    return tassign(state, {
        error: action.payload,
        isLoading: false,
    });
};