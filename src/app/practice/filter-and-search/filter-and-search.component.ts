import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-and-search',
  templateUrl: './filter-and-search.component.html',
  styleUrls: ['./filter-and-search.component.scss'],
})
export class FilterAndSearchComponent implements OnInit {
  dataList: { id: number; title: string; score: number }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.GetData();
  }

  GetData() {
    this.dataList = data;
  }
}

const data = [
  {
    id: 1,
    title: 'Duis urna metus',
    score: 5,
  },
  {
    id: 2,
    title: 'Vivamus velit',
    score: 5,
  },
  {
    id: 3,
    title: 'Aliquam feugiat',
    score: 5,
  },
  {
    id: 4,
    title: 'Ut enim enim',
    score: 5,
  },
];
