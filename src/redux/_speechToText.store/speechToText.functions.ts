import { tassign } from 'tassign';
import { LRP_SpeechToTextState } from './speechToText.store';

// FETCH_SPEECH_TO_TEXT
export const FetchSpeechToTextSession = (
  state: LRP_SpeechToTextState,
  action: any
) => {
  console.log('load SpeechToText action: ', action);
  return tassign(state, {
    isLoading: true,
  });
};

export const FetchSpeechToTextSessionSuccess = (
  state: LRP_SpeechToTextState,
  action: any
) => {
  console.log('load SpeechToText action: ', action);
  return tassign(state, {
    speechTexts: action.payload,
    isLoading: false,
  });
};

export const FetchSpeechToTextSessionFailure = (
  state: LRP_SpeechToTextState,
  action: any
) => {
  console.log('load SpeechToText action: ', action);
  return tassign(state, {
    error: action.payload,
  });
};

// ADD_SPEECH_TO_TEXT
export const AddSpeechToTextSession = (
  state: LRP_SpeechToTextState,
  action: any
) => {
  console.log('load SpeechToText action: ', action);
  return tassign(state, {
    isLoading: true,
  });
};

export const AddSpeechToTextSessionSuccess = (
  state: LRP_SpeechToTextState,
  action: any
) => {
  console.log('load SpeechToText action: ', action);
  return tassign(state, {
    speechTexts: action.payload,
    isLoading: false,
  });
};

export const AddSpeechToTextSessionFailure = (
  state: LRP_SpeechToTextState,
  action: any
) => {
  console.log('load SpeechToText action: ', action);
  return tassign(state, {
    error: action.payload,
  });
};
