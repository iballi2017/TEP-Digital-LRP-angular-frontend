import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-column-action-buttons',
  templateUrl: './table-column-action-buttons.component.html',
  styleUrls: ['./table-column-action-buttons.component.scss'],
})
export class TableColumnActionButtonsComponent implements OnInit {
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
  @Input() successBtnTitle!: string;
  successTitle = 'Edit';
  constructor() {}

  ngOnInit(): void {
    if (this.successBtnTitle) {
      this.successTitle = this.successBtnTitle;
    }
  }

  onRemove() {
    this.remove.emit();
  }
  onEdit() {
    this.edit.emit();
  }
}
