import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOfUsersInputDialogComponent } from './number-of-users-input-dialog.component';

describe('NumberOfUsersInputDialogComponent', () => {
  let component: NumberOfUsersInputDialogComponent;
  let fixture: ComponentFixture<NumberOfUsersInputDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOfUsersInputDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberOfUsersInputDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
