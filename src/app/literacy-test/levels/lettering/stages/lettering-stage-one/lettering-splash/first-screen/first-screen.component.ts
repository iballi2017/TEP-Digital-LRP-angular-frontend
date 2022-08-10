import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.scss'],
})
export class FirstScreenComponent implements OnInit {
  statement = 'Hello, my name is Audu';
  leftLink = '';
  rightLink = '/literacy/stage-1/lettering-splash/second-screen';
  constructor() {}

  ngOnInit(): void {}
}
