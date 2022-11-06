import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-value-stage-one-splash',
  templateUrl: './place-value-stage-one-splash.component.html',
  styleUrls: ['./place-value-stage-one-splash.component.scss']
})
export class PlaceValueStageOneSplashComponent implements OnInit {
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
