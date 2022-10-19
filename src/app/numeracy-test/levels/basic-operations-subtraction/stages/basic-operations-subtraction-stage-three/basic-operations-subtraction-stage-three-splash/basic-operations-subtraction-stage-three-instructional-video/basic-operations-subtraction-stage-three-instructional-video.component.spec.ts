import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageThreeInstructionalVideoComponent } from './basic-operations-subtraction-stage-three-instructional-video.component';

describe('BasicOperationsSubtractionStageThreeInstructionalVideoComponent', () => {
  let component: BasicOperationsSubtractionStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsSubtractionStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
