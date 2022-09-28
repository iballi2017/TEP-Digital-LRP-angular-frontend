import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';
import { IAppState } from 'src/redux/store';
import {
  ADD_SPEECH_TO_TEXT,
  ADD_SPEECH_TO_TEXT_SUCCESS,
} from 'src/redux/_speechToText.store/speechToText.actions';

declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root',
})
export class ParagraphStageOneService {
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: any;
  VoiceText: any;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
      console.log('transcript: ', transcript);
      console.log('text: ', this.text);
      this.VoiceText = this.text;
      this.GetVoiceText();
    });
  }

  GetVoiceText() {
    console.log('this.VoiceText: ', this.VoiceText);
    return this.VoiceText;
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Speech recognition started');
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log('End speech recognition');
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }

  stop() {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('End speech recognition');
  }

  clear() {
    this.text = '';
    this.ngRedux.dispatch({
      type: ADD_SPEECH_TO_TEXT_SUCCESS,
      payload: null,
    });
  }

  wordConcat() {
    this.ngRedux.dispatch({ type: ADD_SPEECH_TO_TEXT });
    this.text = this.text + ' ' + this.tempWords + ' ';
    this.tempWords = '';

    this.ngRedux.dispatch({
      type: ADD_SPEECH_TO_TEXT_SUCCESS,
      payload: this.text.trim(),
    });
  }

  GetExerciseTexts() {
    return exerciseTexts;
  }
}

export const exerciseTexts = [
  {
    text: 'this is a rat',
    isDone: false,
  },
  {
    text: 'this is a cat',
    isDone: false,
  },
  {
    text: 'cats eat rats',
    isDone: false,
  },
  {
    text: 'rats do not play with cats',
    isDone: false,
  },
];
