import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  reportList = [1, 2, 3];
  filterDropdownList = [FilterDropdown?.first, FilterDropdown?.second];
  constructor() {}

  ngOnInit(): void {}
}

export enum FilterDropdown {
  first = 'Ascending',
  second = 'Descending',
}
