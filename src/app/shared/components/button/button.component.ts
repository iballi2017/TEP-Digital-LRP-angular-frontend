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
  @Input() disabled!: any;
  @Output() onClickEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    if (this.disabled) {
      console.log(this.disabled)
    }
  }

  onClickBtn() {
    this.onClickEvent.emit();
  }
}
