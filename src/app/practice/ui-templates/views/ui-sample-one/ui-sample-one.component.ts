import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-sample-one',
  templateUrl: './ui-sample-one.component.html',
  styleUrls: ['./ui-sample-one.component.scss']
})
export class UiSampleOneComponent implements OnInit {

  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTER',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
