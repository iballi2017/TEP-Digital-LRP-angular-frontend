import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e-vowel',
  templateUrl: './e-vowel.component.html',
  styleUrls: ['./e-vowel.component.scss']
})
export class EVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/spelling-vowel-letters/a-vowel';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/i-vowel';

  constructor() { }

  ngOnInit(): void {
  }

}
