import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth-screen',
  templateUrl: './fifth-screen.component.html',
  styleUrls: ['./fifth-screen.component.scss']
})
export class FifthScreenComponent implements OnInit {
  leftLink = '/literacy/stage-1/lettering-splash/fourth-screen';
  rightLink = '/literacy/stage-1/lettering-splash/sixth-screen';

  constructor() { }

  ngOnInit(): void {
  }

}
