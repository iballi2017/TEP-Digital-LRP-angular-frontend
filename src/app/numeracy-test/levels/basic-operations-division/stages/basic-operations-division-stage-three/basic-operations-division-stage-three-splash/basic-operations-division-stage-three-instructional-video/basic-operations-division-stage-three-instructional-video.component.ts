import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations-division-stage-three-instructional-video',
  templateUrl:
    './basic-operations-division-stage-three-instructional-video.component.html',
  styleUrls: [
    './basic-operations-division-stage-three-instructional-video.component.scss',
  ],
})
export class BasicOperationsDivisionStageThreeInstructionalVideoComponent
  implements OnInit
{
  constructor() {}

  ngOnInit(): void {
    const video = document.querySelector('video');
    video?.addEventListener('ended', this.isEnded, false);
    video?.addEventListener('playing', this.isPlaying, false);
  }
  isEnded() {
    const btn = document.querySelector('.btn-wrapper');
    btn?.classList.remove('d-none');
  }
  isPlaying() {
    const btn = document.querySelector('.btn-wrapper');
    btn?.classList.add('d-none');
  }
}
