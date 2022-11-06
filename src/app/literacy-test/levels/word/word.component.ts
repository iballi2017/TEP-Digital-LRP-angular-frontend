import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
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
