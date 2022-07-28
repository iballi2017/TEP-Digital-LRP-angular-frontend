import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-literacy-test',
  templateUrl: './literacy-test.component.html',
  styleUrls: ['./literacy-test.component.scss'],
})
export class LiteracyTestComponent implements OnInit {
  title = 'LITERACY';
  menuList = [
    {
      title: 'LITERACY',
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
