import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LrpActivityComponent } from './lrp-activity.component';

describe('LrpActivityComponent', () => {
  let component: LrpActivityComponent;
  let fixture: ComponentFixture<LrpActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LrpActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LrpActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
