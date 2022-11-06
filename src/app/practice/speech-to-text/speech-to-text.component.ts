import { Component, OnInit } from '@angular/core';
import { SpeechToTextService } from './services/speech-to-text.service';


@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.scss'],
})
export class SpeechToTextComponent implements OnInit {
  constructor(public _speechToTextSvc: SpeechToTextService) {
    this._speechToTextSvc.init();
  }

  ngOnInit(): void {}

  startService() {
    this._speechToTextSvc.start();
  }

  stopService() {
    this._speechToTextSvc.stop();
  }
}
