import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-audience-applause',
  templateUrl: './audience-applause.component.html',
  styleUrls: ['./audience-applause.component.scss'],
})
export class AudienceApplauseComponent implements OnInit {
  @Output('onPlayApplause') onPlayApplause = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onPlay(value: any) {
    this.onPlayApplause.emit(value);
  }
}
