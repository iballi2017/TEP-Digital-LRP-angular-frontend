import { select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-screen-loader',
  templateUrl: './game-screen-loader.component.html',
  styleUrls: ['./game-screen-loader.component.scss']
})
export class GameScreenLoaderComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @select((s) => s.game.isLoading) isLoading$: any;

  constructor() { }

  ngOnInit(): void {
  }

}
