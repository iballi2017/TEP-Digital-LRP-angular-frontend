import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lettering-stage-one-instructional-video',
  templateUrl: './lettering-stage-one-instructional-video.component.html',
  styleUrls: ['./lettering-stage-one-instructional-video.component.scss'],
})
export class LetteringStageOneInstructionalVideoComponent implements OnInit {
  // isVideoEnded = false;
  constructor() {}

  ngOnInit(): void {
    const video = document.querySelector('video');
    video?.addEventListener('ended', this.isEnded, false);
    video?.addEventListener('playing', this.isPlaying, false);
  }
  isEnded() {
    // this.isVideoEnded = true;
    const btn = document.querySelector('.btn-wrapper');
    btn?.classList.remove('d-none');
  }
  isPlaying() {
    // this.isVideoEnded = true;
    const btn = document.querySelector('.btn-wrapper');
    btn?.classList.add('d-none');
  }
}
