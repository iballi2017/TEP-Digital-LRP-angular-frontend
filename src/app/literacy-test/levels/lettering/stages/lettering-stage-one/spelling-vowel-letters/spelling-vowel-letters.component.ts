import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spelling-vowel-letters',
  templateUrl: './spelling-vowel-letters.component.html',
  styleUrls: ['./spelling-vowel-letters.component.scss']
})
export class SpellingVowelLettersComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
