import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a-vowel',
  templateUrl: './a-vowel.component.html',
  styleUrls: ['./a-vowel.component.scss']
})
export class AVowelComponent implements OnInit {
  leftLink = '/literacy/stage-1/lettering-splash/sixth-screen';
  rightLink = '/literacy/stage-1/spelling-vowel-letters/e-vowel';

  constructor() { }

  ngOnInit(): void {
  }

}
