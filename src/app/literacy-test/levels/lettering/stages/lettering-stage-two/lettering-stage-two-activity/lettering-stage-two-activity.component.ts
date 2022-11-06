import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-two-activity',
  templateUrl: './lettering-stage-two-activity.component.html',
  styleUrls: ['./lettering-stage-two-activity.component.scss']
})
export class LetteringStageTwoActivityComponent implements OnInit {

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
