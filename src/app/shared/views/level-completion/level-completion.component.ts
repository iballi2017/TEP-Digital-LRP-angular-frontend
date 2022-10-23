import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';

@Component({
  selector: 'app-level-completion',
  templateUrl: './level-completion.component.html',
  styleUrls: ['./level-completion.component.scss'],
})
export class LevelCompletionComponent implements OnInit {
  gameType = '';
  levelTitle = '';
  stageNumber!: number;
  // @select((s) => s.game.gameSession) gameSession$: any;
  // @Input() gameType!: string;
  // @Input() levelTitle!: string;
  // @Input() stageNumber!: number;
  pageTitle = 'YOU HAVE COMPLETE tHIS LEVEL OF THE PROGRAM';
  pageFeaturedImage =
    '../../../../../assets/images/level-completion-page-bg.png';
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
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }
    this._router.navigate([`/literacy/levels/lettering`]);
  }
}
