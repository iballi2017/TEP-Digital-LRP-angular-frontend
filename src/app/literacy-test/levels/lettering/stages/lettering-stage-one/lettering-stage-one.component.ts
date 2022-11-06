import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-one',
  templateUrl: './lettering-stage-one.component.html',
  styleUrls: ['./lettering-stage-one.component.scss'],
})
export class LetteringStageOneComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
