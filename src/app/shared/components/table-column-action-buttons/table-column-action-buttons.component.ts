import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-column-action-buttons',
  templateUrl: './table-column-action-buttons.component.html',
  styleUrls: ['./table-column-action-buttons.component.scss'],
})
export class TableColumnActionButtonsComponent implements OnInit {
  @Input() item: any;
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onRemove() {
    this.remove.emit(this.item);
  }
  onEdit() {
    this.edit.emit(this.item);
  }
}
