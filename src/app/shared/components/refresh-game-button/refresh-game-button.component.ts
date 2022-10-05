import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-refresh-game-button',
  templateUrl: './refresh-game-button.component.html',
  styleUrls: ['./refresh-game-button.component.scss'],
})
export class RefreshGameButtonComponent implements OnInit {
  @Output() onRefreshGame = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  refreshGame() {
    this.onRefreshGame.emit('game refreshed!!!');
  }
}
