import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOnboardingComponent } from './test-onboarding.component';

describe('TestOnboardingComponent', () => {
  let component: TestOnboardingComponent;
  let fixture: ComponentFixture<TestOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
