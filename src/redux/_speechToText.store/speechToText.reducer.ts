import {
  ADD_SPEECH_TO_TEXT,
  ADD_SPEECH_TO_TEXT_ERROR,
  ADD_SPEECH_TO_TEXT_SUCCESS,
  FETCH_SPEECH_TO_TEXT,
  FETCH_SPEECH_TO_TEXT_ERROR,
  FETCH_SPEECH_TO_TEXT_SUCCESS,
} from './speechToText.actions';
import {
  FetchSpeechToTextSession,
  FetchSpeechToTextSessionFailure,
  FetchSpeechToTextSessionSuccess,
} from './speechToText.functions';
import {
  INITIAL_SPEECH_TO_TEXT_STATE,
  LRP_SpeechToTextState,
} from './speechToText.store';

export function SpeechToTextReducer(
  state: LRP_SpeechToTextState | any = INITIAL_SPEECH_TO_TEXT_STATE,
  action: any
): LRP_SpeechToTextState {
  switch (action.type) {
    // FETCH_SPEECH_TO_TEXT
    case FETCH_SPEECH_TO_TEXT:
      return FetchSpeechToTextSession(state, action);
    case FETCH_SPEECH_TO_TEXT_SUCCESS:
      return FetchSpeechToTextSessionSuccess(state, action);
    case FETCH_SPEECH_TO_TEXT_ERROR:
      return FetchSpeechToTextSessionFailure(state, action);
    // ADD_SPEECH_TO_TEXT
    case ADD_SPEECH_TO_TEXT:
      return FetchSpeechToTextSession(state, action);
    case ADD_SPEECH_TO_TEXT_SUCCESS:
      return FetchSpeechToTextSessionSuccess(state, action);
    case ADD_SPEECH_TO_TEXT_ERROR:
      return FetchSpeechToTextSessionFailure(state, action);
  }
  return state;
}
