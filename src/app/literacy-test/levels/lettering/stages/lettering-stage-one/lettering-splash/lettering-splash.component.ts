import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-splash',
  templateUrl: './lettering-splash.component.html',
  styleUrls: ['./lettering-splash.component.scss']
})
export class LetteringSplashComponent implements OnInit {
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
