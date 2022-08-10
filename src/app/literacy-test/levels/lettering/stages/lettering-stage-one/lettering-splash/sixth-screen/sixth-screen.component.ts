import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth-screen',
  templateUrl: './sixth-screen.component.html',
  styleUrls: ['./sixth-screen.component.scss']
})
export class SixthScreenComponent implements OnInit {
  leftLink = '/literacy/stage-1/lettering-splash/fifth-screen';
  rightLink = '/literacy/stage-1/spelling-vowel-letters';

  constructor() { }

  ngOnInit(): void {
  }

}
