import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronounced-as-o',
  templateUrl: './pronounced-as-o.component.html',
  styleUrls: ['./pronounced-as-o.component.scss']
})
export class PronouncedAsOComponent implements OnInit {
  statement = "It is pronounced as 'i'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-o';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-o';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
