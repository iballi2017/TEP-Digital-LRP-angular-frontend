import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageFourSplashComponent } from './basic-operations-multiplication-stage-four-splash.component';

describe('BasicOperationsMultiplicationStageFourSplashComponent', () => {
  let component: BasicOperationsMultiplicationStageFourSplashComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageFourSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageFourSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageFourSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
