import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-menu',
  templateUrl: './practice-menu.component.html',
  styleUrls: ['./practice-menu.component.scss']
})
export class PracticeMenuComponent implements OnInit {
  menuList!:any[];
  baseUrl = '/practice/'
  constructor() { }

  ngOnInit(): void {
    this.menuList = [
      {
        title: 'Speech synthesis',
        url: `${this.baseUrl}/speech-synthesis`
      },
      {
        title: 'Progress bar',
        url: `${this.baseUrl}/progress-bar`
      },
      {
        title: 'UI templates',
        url: `${this.baseUrl}/ui-templates`
      },
      {
        title: 'LRP activity',
        url: `${this.baseUrl}/lrp-activity`
      },
      {
        title: 'Speech to text',
        url: `${this.baseUrl}/speech-to-text`
      },
      {
        title: 'Search filter',
        url: `${this.baseUrl}/search-filter`
      }
    ]
  }

}
