import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identify-vowel-letters',
  templateUrl: './identify-vowel-letters.component.html',
  styleUrls: ['./identify-vowel-letters.component.scss']
})
export class IdentifyVowelLettersComponent implements OnInit {

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
