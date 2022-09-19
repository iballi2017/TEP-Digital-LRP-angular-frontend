import { select } from '@angular-redux/store';
import { Component, Input, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { GameSessionData, GameStageResult } from 'src/app/models/types/game';
import { GameService } from 'src/app/services/game.service';
import { SnackbarComponent } from '../../components/snackbar/snackbar.component';

@Component({
  selector: 'app-stage-completion',
  templateUrl: './stage-completion.component.html',
  styleUrls: ['./stage-completion.component.scss'],
})
export class StageCompletionComponent implements OnInit {
  @select((s) => s.game.gameSession) gameSession$: any;
  @Input() levelTitle!: string;
  @Input() stageNumber!: number;
  pageTitle = '! ! STAGE COMPLETE ! !';
  pageFeaturedImage =
    '../../../../../assets/images/stage-completion-featured-image.png';
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
  constructor(
    private _router: Router,
    private _gameSvc: GameService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('stage info: ', {
      levelTitle: this.levelTitle,
      stageNumber: this.stageNumber,
    });

    this.gameLevel = {
      stageNumber: this.stageNumber,
      levelTitle: this.levelTitle,
    };

    // LOAD GAME SESSION DATA
    this._gameSvc.LoadGameSession();
    this.onGetGameSessionId();
    this.onGetStageResult();

  }

  onGetGameSessionId() {
    this.gameSession$.subscribe({
      next: (data: any) => {
        console.log('gameSession$ data: ', data);
        this.gameSessionId = data?.session_id;
      },
    });
  }

  onGetStageResult() {
    let x: any = sessionStorage.getItem(GameSessionData.result);
    console.log('x: ', x);
    console.log('parsed x: ', JSON.parse(x));
    this.gameResult = x;
  }

  onContinueToNextStage($event: any) {
    console.log('$event: ', $event);
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }    
    setTimeout(() => {
      // this._router.navigate([`/shared/new-task-loading/${this.levelTitle}/${this.stageNumber}`]);
      this._router.navigate([`/shared/new-task-loading/${this.levelTitle}/${this.stageNumber}`]);
    }, 3000);
  }

  onEndAssessment($event: any) {
    console.log('$event: ', $event);
    if (!this.gameSessionId || !this.gameResult) {
      this._router.navigate(['/']);
    }
    this._router.navigate([`/literacy/levels/lettering`]);
  }

  // SubmitStageResult(GameStageResult: GameStageResult, NextPage: string) {
  //   this._gameSvc.SubmitGameStageResult(GameStageResult).subscribe({
  //     next: (response: any) => {
  //       if (response) {
  //         console.log('response: ', response);
  //         setTimeout(() => {
  //           this._router.navigate([NextPage]);
  //         }, 3000);
  //       }
  //     },
  //     error: (err: any) => {
  //       if (err) {
  //         console.warn('Error: ', err);
  //       }
  //     },
  //   });
  // }

}
