import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-two-pronunciation',
  templateUrl: './lettering-stage-two-pronunciation.component.html',
  styleUrls: ['./lettering-stage-two-pronunciation.component.scss']
})
export class LetteringStageTwoPronunciationComponent implements OnInit {
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
