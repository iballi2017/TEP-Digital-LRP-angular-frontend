import {
  ADD_SPEECH_TO_TEXT,
  ADD_SPEECH_TO_TEXT_SUCCESS,
} from 'src/redux/_speechToText.store/speechToText.actions';

export class SpeechToText {
  text: any;
  tempWords: any;
  ngRedux: any;
  constructor(ngRedux: any, text: any, tempWords: any) {
    this.tempWords = tempWords;
    this.text = text;
    this.ngRedux = ngRedux;
  }

  wordConcat() {
    
    this.ngRedux.dispatch({ type: ADD_SPEECH_TO_TEXT });
    this.text = this.text + ' ' + this.tempWords + ' ';
    console.warn("this.tempWords: ", this.tempWords)
    this.tempWords = '';

    this.ngRedux.dispatch({
      type: ADD_SPEECH_TO_TEXT_SUCCESS,
      payload: this.text.trim(),
    });
  }

  clear(){
    
    this.text = '';
    this.ngRedux.dispatch({
      type: ADD_SPEECH_TO_TEXT_SUCCESS,
      payload: null,
    });
  }
}
