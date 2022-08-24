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
  @Input() btnType!: any;
  @Output() onClickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClickBtn() {
    this.onClickEvent.emit();
  }
}
