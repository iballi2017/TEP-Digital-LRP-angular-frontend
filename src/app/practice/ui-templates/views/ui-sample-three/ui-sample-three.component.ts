import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-sample-three',
  templateUrl: './ui-sample-three.component.html',
  styleUrls: ['./ui-sample-three.component.scss']
})
export class UiSampleThreeComponent implements OnInit {

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
