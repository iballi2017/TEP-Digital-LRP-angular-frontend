import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consonants-lettering-splash',
  templateUrl: './consonants-lettering-splash.component.html',
  styleUrls: ['./consonants-lettering-splash.component.scss']
})
export class ConsonantsLetteringSplashComponent implements OnInit {
  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 2',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
