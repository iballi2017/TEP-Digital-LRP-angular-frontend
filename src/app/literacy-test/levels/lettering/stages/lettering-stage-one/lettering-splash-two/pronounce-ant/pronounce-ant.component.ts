import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronounce-ant',
  templateUrl: './pronounce-ant.component.html',
  styleUrls: ['./pronounce-ant.component.scss']
})
export class PronounceAntComponent implements OnInit {
  statement = "'a' as in 'ant'";
  leftLink = '/literacy/stage-1/lettering-splash-screen-two/say-alphabet-a';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two/pronounce-ant';

  constructor() { }

  ngOnInit(): void {
  }

}
