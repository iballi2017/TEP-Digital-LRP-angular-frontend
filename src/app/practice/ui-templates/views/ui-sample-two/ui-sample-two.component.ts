import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-sample-two',
  templateUrl: './ui-sample-two.component.html',
  styleUrls: ['./ui-sample-two.component.scss']
})
export class UiSampleTwoComponent implements OnInit {

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
