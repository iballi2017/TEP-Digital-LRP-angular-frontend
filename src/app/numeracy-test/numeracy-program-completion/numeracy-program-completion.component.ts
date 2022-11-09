import { Component, OnInit } from '@angular/core';
import { GameType } from 'src/app/models/types/game-type';

@Component({
  selector: 'app-numeracy-program-completion',
  templateUrl: './numeracy-program-completion.component.html',
  styleUrls: ['./numeracy-program-completion.component.scss']
})
export class NumeracyProgramCompletionComponent implements OnInit {
  gameType = GameType.NUMERACY;

  constructor() { }

  ngOnInit(): void {
  }

}
