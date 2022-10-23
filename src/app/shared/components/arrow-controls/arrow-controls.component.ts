import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-controls',
  templateUrl: './arrow-controls.component.html',
  styleUrls: ['./arrow-controls.component.scss'],
})
export class ArrowControlsComponent implements OnInit {
  @Input() leftLink!: string;
  @Input() rightLink!: string;
  @Input('isCorrect') isCorrect!: any;

  constructor() {}

  ngOnInit(): void {
  }
}
