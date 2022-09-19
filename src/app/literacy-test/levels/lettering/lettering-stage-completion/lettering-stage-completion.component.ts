import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lettering-stage-completion',
  templateUrl: './lettering-stage-completion.component.html',
  styleUrls: ['./lettering-stage-completion.component.scss'],
})
export class LetteringStageCompletionComponent implements OnInit {
  levelTitle!: string;
  stageNumber!: number;
  gameLevel: any;
  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getParams();
    // this.levelTitle = 'Lettering';

  }

  getParams() {
    this._route.paramMap.subscribe({
      next: (params: any) => {
        this.stageNumber = params.get('stage-number');
        console.log('this.stageNumber: ', this.stageNumber);
        this.gameLevel = params.get('game-level');
        console.log('this.stageNumber: ', this.stageNumber);
        this.levelTitle =  this.gameLevel;
      },
    });
  }
}
