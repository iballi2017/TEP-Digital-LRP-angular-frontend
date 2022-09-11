import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeTwoComponent } from './activity-type-two.component';

describe('ActivityTypeTwoComponent', () => {
  let component: ActivityTypeTwoComponent;
  let fixture: ComponentFixture<ActivityTypeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityTypeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
