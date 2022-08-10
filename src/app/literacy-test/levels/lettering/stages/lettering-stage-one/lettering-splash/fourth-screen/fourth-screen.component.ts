import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-screen',
  templateUrl: './fourth-screen.component.html',
  styleUrls: ['./fourth-screen.component.scss']
})
export class FourthScreenComponent implements OnInit {
  leftLink = '/literacy/stage-1/lettering-splash/third-screen';
  rightLink = '/literacy/stage-1/lettering-splash/fifth-screen';

  constructor() { }

  ngOnInit(): void {
  }

}
