import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageFourSplashComponent } from './basic-operations-subtraction-stage-four-splash.component';

describe('BasicOperationsSubtractionStageFourSplashComponent', () => {
  let component: BasicOperationsSubtractionStageFourSplashComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageFourSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageFourSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsSubtractionStageFourSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
