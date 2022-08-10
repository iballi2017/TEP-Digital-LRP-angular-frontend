import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-vowel',
  templateUrl: './i-vowel.component.html',
  styleUrls: ['./i-vowel.component.scss']
})
export class IVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/e-vowel';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/o-vowel';

  constructor() { }

  ngOnInit(): void {
  }

}
