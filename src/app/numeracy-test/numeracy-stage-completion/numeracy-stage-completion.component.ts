import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-numeracy-stage-completion',
  templateUrl: './numeracy-stage-completion.component.html',
  styleUrls: ['./numeracy-stage-completion.component.scss']
})
export class NumeracyStageCompletionComponent implements OnInit {
  levelTitle!: string;
  stageNumber!: number;
  gameLevel: any;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();

  }

  getParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        this.stageNumber = params.get('stage-number');
        this.gameLevel = params.get('game-level');
        this.levelTitle =  this.gameLevel;
      },
    });
  }

}
