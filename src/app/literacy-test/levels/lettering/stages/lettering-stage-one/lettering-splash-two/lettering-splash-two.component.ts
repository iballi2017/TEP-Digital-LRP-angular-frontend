import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-splash-two',
  templateUrl: './lettering-splash-two.component.html',
  styleUrls: ['./lettering-splash-two.component.scss']
})
export class LetteringSplashTwoComponent implements OnInit {

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
