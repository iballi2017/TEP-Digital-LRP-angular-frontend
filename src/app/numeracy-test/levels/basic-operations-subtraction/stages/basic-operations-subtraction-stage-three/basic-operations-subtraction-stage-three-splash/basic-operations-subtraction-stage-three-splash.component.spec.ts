import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageThreeSplashComponent } from './basic-operations-subtraction-stage-three-splash.component';

describe('BasicOperationsSubtractionStageThreeSplashComponent', () => {
  let component: BasicOperationsSubtractionStageThreeSplashComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageThreeSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsSubtractionStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
