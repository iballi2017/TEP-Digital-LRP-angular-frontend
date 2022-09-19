import { Component, OnInit } from '@angular/core';
import { GameType } from 'src/app/models/types/game';
import { GameLevel } from 'src/app/models/types/game-level';

@Component({
  selector: 'app-lettering',
  templateUrl: './lettering.component.html',
  styleUrls: ['./lettering.component.scss'],
})
export class LetteringComponent implements OnInit {
  letteringStages = [
    { id: 1, title: 'stage-1' },
    { id: 2, title: 'stage-2' },
    { id: 3, title: 'stage-3' },
    { id: 4, title: 'stage-4' },
  ];
  // url='/literacy/lettering/';
  // url = `${GameType.Literacy}/${GameLevel.LETTER}`
  constructor() {}

  ngOnInit(): void {
    // this.url = `${GameType.Literacy}/${GameLevel.LETTER}`
  }
}
