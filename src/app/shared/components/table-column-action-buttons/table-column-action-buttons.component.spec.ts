import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnActionButtonsComponent } from './table-column-action-buttons.component';

describe('TableColumnActionButtonsComponent', () => {
  let component: TableColumnActionButtonsComponent;
  let fixture: ComponentFixture<TableColumnActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColumnActionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
