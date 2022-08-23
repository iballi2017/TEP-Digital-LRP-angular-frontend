import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() btnStyle!: any;
  @Input() btnClasses!: any;
  @Input() btnTitle!: any;
  @Output() onContinue = new EventEmitter();
  @Output() onEndAssessment = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClickBtn() {
    this.onContinue.emit();
    this.onEndAssessment.emit();
  }
}
