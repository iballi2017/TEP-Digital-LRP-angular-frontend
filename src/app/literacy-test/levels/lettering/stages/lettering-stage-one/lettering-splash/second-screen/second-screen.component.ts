import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-screen',
  templateUrl: './second-screen.component.html',
  styleUrls: ['./second-screen.component.scss'],
})
export class SecondScreenComponent implements OnInit {
  statement = 'Audu is spelled A, U, D, U Audu';
  leftLink = '/literacy/stage-1/lettering-splash/first-screen';
  rightLink = '/literacy/stage-1/lettering-splash/third-screen';

  constructor() {}

  ngOnInit(): void {}
}
