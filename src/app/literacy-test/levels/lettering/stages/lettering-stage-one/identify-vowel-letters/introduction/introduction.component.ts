import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss'],
})
export class IntroductionComponent implements OnInit {
  statement = 'Now identify the vowl letters';
  leftLink = '/literacy/lettering/stage-1/pronunciation/pronounce-umbrella';
  rightLink = '/literacy/lettering/stage-1/identify-vowel-letters/identify-alphabet-a';
  srcFile = '';
  // '../../../../../../../../assets/audio/alphabet-a/literacy_stage-1_lettering-splash-screen-two.mp3';

  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 1',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
