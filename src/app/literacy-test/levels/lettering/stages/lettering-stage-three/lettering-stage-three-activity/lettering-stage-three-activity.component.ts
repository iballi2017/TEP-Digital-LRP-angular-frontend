import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-three-activity',
  templateUrl: './lettering-stage-three-activity.component.html',
  styleUrls: ['./lettering-stage-three-activity.component.scss']
})
export class LetteringStageThreeActivityComponent implements OnInit {


  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 3',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
