import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-vowel',
  templateUrl: './u-vowel.component.html',
  styleUrls: ['./u-vowel.component.scss']
})
export class UVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/o-vowel';
  rightLink = '/literacy/stage-1/lettering-splash-screen-two';
statement = "";
  constructor() { }

  ngOnInit(): void {
  }

}
