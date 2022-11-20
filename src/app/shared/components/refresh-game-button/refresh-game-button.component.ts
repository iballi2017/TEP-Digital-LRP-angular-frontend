import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-refresh-game-button',
  templateUrl: './refresh-game-button.component.html',
  styleUrls: ['./refresh-game-button.component.scss'],
})
export class RefreshGameButtonComponent implements OnInit {
  @Output() onRefreshGame = new EventEmitter();
  @Input('audioFile') audioFile!: string;
  constructor() { }

  ngOnInit(): void { }

  refreshGame() {
    this.onRefreshGame.emit('game refreshed!!!');
    this.playSound();
  }


  ngAfterViewInit() {
    this.playSound();
  }

  playSound() {
    if (this.audioFile) {
      let audio: any = new Audio();
      audio.src = this.audioFile;
      audio?.load();
      audio?.play();
    }
  }
}
