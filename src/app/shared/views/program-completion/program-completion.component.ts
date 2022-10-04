import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';

@Component({
  selector: 'app-program-completion',
  templateUrl: './program-completion.component.html',
  styleUrls: ['./program-completion.component.scss']
})
export class ProgramCompletionComponent implements OnInit {
  gameType = '';
  levelTitle = '';
  stageNumber!: number;
  // @select((s) => s.game.gameSession) gameSession$: any;
  // @Input() gameType!: string;
  // @Input() levelTitle!: string;
  // @Input() stageNumber!: number;
  pageTitle = 'YOU HAVE COMPLETEd tHIS program';
  pageFeaturedImage =
    '../../../../../assets/images/program-completion-page-bg.png';
  btnStyle = {
    color: 'red',
  };
  btnStyle2 = {
    color: 'blue',
  };
  btnClasses = { 'primary-btn': true, 'btn-block': true, 'mb-3': true };
  btnClasses2 = { 'danger-btn': true, 'btn-block': true };
  btnTitle = 'CONTINUE';
  btnTitle2 = 'END ASSESSMENT';
  gameLevel: any;
  gameSessionId!: string;
  gameResult!: any;
  durationInSeconds = 10;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onContinueToNextStage($event: any) {
    console.log('$event: ', $event);
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }
    setTimeout(() => {
      switch (this.levelTitle) {
        case GameLevel.LETTER:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.WORD}/${this.stageNumber}`,
          ]);
          break;
        case GameLevel.WORD:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.PARAGRAPH}/${this.stageNumber}`,
          ]);
          break;
        case GameLevel.PARAGRAPH:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.STORY}/${this.stageNumber}`,
          ]);
          break;

        default:
          this._router.navigate([
            `/shared/new-task-loading/${GameLevel.LETTER}/${this.stageNumber}`,
          ]);
          break;
      }
    }, 3000);
  }

  onEndAssessment($event: any) {
    console.log('$event: ', $event);
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }
    this._router.navigate([`/literacy/levels/lettering`]);
  }

}
