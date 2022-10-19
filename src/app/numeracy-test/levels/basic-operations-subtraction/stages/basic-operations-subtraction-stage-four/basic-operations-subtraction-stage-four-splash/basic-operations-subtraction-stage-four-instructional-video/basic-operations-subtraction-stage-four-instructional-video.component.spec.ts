import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageFourInstructionalVideoComponent } from './basic-operations-subtraction-stage-four-instructional-video.component';

describe('BasicOperationsSubtractionStageFourInstructionalVideoComponent', () => {
  let component: BasicOperationsSubtractionStageFourInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageFourInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageFourInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsSubtractionStageFourInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
