import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronounced-as-u',
  templateUrl: './pronounced-as-u.component.html',
  styleUrls: ['./pronounced-as-u.component.scss']
})
export class PronouncedAsUComponent implements OnInit {
  statement = "It is pronounced as 'i'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-u';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-u';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
