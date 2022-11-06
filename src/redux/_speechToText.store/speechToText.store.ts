export interface LRP_SpeechToTextState {
    speechTexts: any;
    error: any;
    isLoading: boolean;
  }
  
  export const INITIAL_SPEECH_TO_TEXT_STATE: LRP_SpeechToTextState = {
    speechTexts: null,
    error: null,
    isLoading: false,
  };
  