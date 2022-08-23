import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronounced-as-i',
  templateUrl: './pronounced-as-i.component.html',
  styleUrls: ['./pronounced-as-i.component.scss']
})
export class PronouncedAsIComponent implements OnInit {
  statement = "It is pronounced as 'i'";
  leftLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/alphabet-i';
  // rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/pronounce-ant';
  rightLink = '/literacy/lettering/stage-1/lettering-splash-screen-two/say-alphabet-i';

  srcFile = '';
  // '../../../../../../../../../assets/audio/alphabet-e/literacy_stage-1_lettering-splash-screen-two_say-alphabet-e.mp3';

  constructor() { }

  ngOnInit(): void {
  }

}
