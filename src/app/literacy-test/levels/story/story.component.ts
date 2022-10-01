import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  Stages = [
    { id: 1, title: 'stage-1' },
    { id: 2, title: 'stage-2' },
    { id: 3, title: 'stage-3' },
    { id: 4, title: 'stage-4' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
