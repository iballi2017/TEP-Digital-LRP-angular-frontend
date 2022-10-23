import { NgRedux } from '@angular-redux/store';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { baseUrl } from 'src/app/config/api';
import { handleError } from 'src/app/helpers/errorHandler';
import { SpeechToText } from 'src/app/models/classes/speech-to-text';
import { ExerciseAnswer } from 'src/app/models/types/exercise-answer';
import { exerciseTexts } from 'src/assets/data/literacy.data/paragraph-stage-three.data';
import { IAppState } from 'src/redux/store';
import {
  ADD_SPEECH_TO_TEXT,
  ADD_SPEECH_TO_TEXT_SUCCESS,
} from 'src/redux/_speechToText.store/speechToText.actions';

declare var webkitSpeechRecognition: any;
@Injectable({
  providedIn: 'root',
})
export class ParagraphStageThreeService {
  StartGameUrl = baseUrl + '/start-game-session';
  SubmitGameStage_3_Url = baseUrl + '/submit-paragraph-stage-3';
  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords: any;
  VoiceText: any;

  constructor(private ngRedux: NgRedux<IAppState>, private _http: HttpClient) {}

  init() {
    this.recognition.interimResults = true;
    this.recognition.lang = 'en-US';

    this.recognition.addEventListener('result', (e: any) => {
      const transcript = Array.from(e.results)
        .map((result: any) => result[0])
        .map((result: any) => result.transcript)
        .join('');
      this.tempWords = transcript;
      this.VoiceText = this.text;
      this.GetVoiceText();
    });
  }

  GetVoiceText() {
    return this.VoiceText;
  }

  start() {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    this.recognition.addEventListener('end', (condition: any) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        
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
    
  }

  clear() {
    // let x = new SpeechToText(this.ngRedux, this.text, this.tempWords);
    // 
    // x.clear();
    this.text = '';
    this.ngRedux.dispatch({
      type: ADD_SPEECH_TO_TEXT_SUCCESS,
      payload: null,
    });
  }

  wordConcat() {
    // let x = new SpeechToText(this.ngRedux, this.text, this.tempWords);
    // 
    // x.wordConcat();
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

  
  SubmitGameStageResult(_GameStageResult: ExerciseAnswer) {
    return this._http
      .post(`${this.SubmitGameStage_3_Url}`, _GameStageResult)
      .pipe(catchError(handleError));
  }
}


// export const exerciseTexts = [
//   {
//     textList: [
//       'My name is Joy',
//       'I am ten years old',
//       'My best colors are blue and pink',
//     ],
//     isDone: false,
//   },
//   {
//     textList: [
//       'my name is joy',
//       'I am ten years old',
//       'my best colors are blue and pink',
//     ],
//     isDone: false,
//   },
//   {
//     textList: [
//       'every day, I like to drink some tea',
//       'my mother got me a tea cup',
//       'I drink tea with it every day',
//       'my tea cup is the color blue',
//     ],
//     isDone: false,
//   },
//   {
//     textList: ['I love my blue tea cup.'],
//     isDone: false,
//   },
// ];
