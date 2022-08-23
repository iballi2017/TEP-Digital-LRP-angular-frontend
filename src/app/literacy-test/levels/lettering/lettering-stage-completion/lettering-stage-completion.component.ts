import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-completion',
  templateUrl: './lettering-stage-completion.component.html',
  styleUrls: ['./lettering-stage-completion.component.scss'],
})
export class LetteringStageCompletionComponent implements OnInit {
  levelTitle!: string;
  stageNumber!: number;
  constructor() {}

  ngOnInit(): void {
    this.levelTitle = 'Lettering';
    this.stageNumber = 1;
  }
}
