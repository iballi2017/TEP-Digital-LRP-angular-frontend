import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-vowel',
  templateUrl: './o-vowel.component.html',
  styleUrls: ['./o-vowel.component.scss']
})
export class OVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/i-vowel';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/u-vowel';

  constructor() { }

  ngOnInit(): void {
  }

}
