import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-alphabet-a',
  templateUrl: './say-alphabet-a.component.html',
  styleUrls: ['./say-alphabet-a.component.scss']
})
export class SayAlphabetAComponent implements OnInit {
  statement = "Say After Me 'a'";
  leftLink = '/literacy/stage-1/lettering-splash-screen-two';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two/pronounce-ant';
  constructor() { }

  ngOnInit(): void {
  }

}
