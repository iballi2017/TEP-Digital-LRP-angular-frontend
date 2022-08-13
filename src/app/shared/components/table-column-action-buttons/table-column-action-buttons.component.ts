import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-column-action-buttons',
  templateUrl: './table-column-action-buttons.component.html',
  styleUrls: ['./table-column-action-buttons.component.scss'],
})
export class TableColumnActionButtonsComponent implements OnInit {
  @Input() itemRemove: any;
  @Input() itemEdit: any;
  @Output() remove = new EventEmitter();
  @Output() edit = new EventEmitter();
  removeContent = null;
  editContent = null;
  constructor() {}

  ngOnInit(): void {
    this.removeContent = this.itemRemove;
    this.editContent = this.itemEdit;
    console.log('data: ', {
      itemRemove: this.itemRemove,
      itemEdit: this.itemEdit,
    });
  }

  onRemove() {
    this.remove.emit(this.itemRemove);
  }
  onEdit() {
    this.edit.emit(this.itemEdit);
  }
}
