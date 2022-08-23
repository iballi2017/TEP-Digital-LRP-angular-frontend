import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronounced-as-e',
  templateUrl: './pronounced-as-e.component.html',
  styleUrls: ['./pronounced-as-e.component.scss'],
})
export class PronouncedAsEComponent implements OnInit {
  statement = "It is pronounced as 'e'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-e';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-e';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() {}

  ngOnInit(): void {}
}
