import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-voice-audio-player',
  templateUrl: './voice-audio-player.component.html',
  styleUrls: ['./voice-audio-player.component.scss'],
})
export class VoiceAudioPlayerComponent implements OnInit {
  @Input('audioFile') audioFile!: string;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.playSound();
  }

  playSound() {
    console.log('click');
    let audio = new Audio();
    audio.src = this.audioFile;
    audio.load();
    audio.play();
  }
}
