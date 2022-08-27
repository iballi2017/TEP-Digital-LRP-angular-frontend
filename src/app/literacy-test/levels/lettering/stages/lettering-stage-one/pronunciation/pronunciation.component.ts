import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pronunciation',
  templateUrl: './pronunciation.component.html',
  styleUrls: ['./pronunciation.component.scss']
})
export class PronunciationComponent implements OnInit {

  menuList = [
    {
      title: 'LITERACY',
    },
    {
      title: 'LETTERING',
    },
    {
      title: 'STAGE 1',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
