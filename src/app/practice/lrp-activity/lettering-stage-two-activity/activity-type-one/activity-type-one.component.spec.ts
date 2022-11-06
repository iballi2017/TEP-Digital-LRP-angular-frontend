import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTypeOneComponent } from './activity-type-one.component';

describe('ActivityTypeOneComponent', () => {
  let component: ActivityTypeOneComponent;
  let fixture: ComponentFixture<ActivityTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityTypeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
