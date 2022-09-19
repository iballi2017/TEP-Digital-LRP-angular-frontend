import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameLevel } from 'src/app/models/types/game-level';
import { GameStage } from 'src/app/models/types/game-stage';

@Component({
  selector: 'app-level-loader',
  templateUrl: './level-loader.component.html',
  styleUrls: ['./level-loader.component.scss'],
})
export class LevelLoaderComponent implements OnInit, AfterViewChecked {
  levelTitle!: any;
  stageNumber!: number;
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getUrlParams();
  }
  ngAfterViewChecked(): void {
    this.playAnimation();
  }
  playAnimation() {
    let progressBar = document.querySelector('#progress');
    // progressBar?.setAttribute('class', 'play-animation');
    progressBar?.classList.add('play-animation');
  }

  getUrlParams() {
    this._route.paramMap.subscribe({
      next: (params) => {
        if (params) {
          console.log(params);
          // let x: any = params.get('levelTitle');
          let x: any = params.get('game-level');
          this.levelTitle = x?.toLowerCase();
          let stageNumber: any = params.get('stageNumber');
          this.stageNumber = parseInt(stageNumber);
          setTimeout(() => {
            // alert("loaded!!!")
            if (
              this.levelTitle == GameLevel.LETTER &&
              this.stageNumber == GameStage.THREE
            ) {
              this._router.navigate([
                '/literacy/word/stage-1/word-stage-one-splash',
              ]);
            } else {
              this._router.navigate([
                // /literacy/lettering/stage-2/lettering-splash
                `/literacy/${this.levelTitle}/stage-${
                  this.stageNumber + 1
                }/lettering-splash`,
              ]);
            }
          }, 3000);
        }
      },
    });
  }
}
