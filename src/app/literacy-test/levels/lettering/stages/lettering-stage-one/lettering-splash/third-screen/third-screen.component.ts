import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-screen',
  templateUrl: './third-screen.component.html',
  styleUrls: ['./third-screen.component.scss']
})
export class ThirdScreenComponent implements OnInit {
  leftLink = '/literacy/stage-1/lettering-splash/second-screen';
  rightLink = '/literacy/stage-1/lettering-splash/fourth-screen';

  constructor() { }

  ngOnInit(): void {
  }

}
