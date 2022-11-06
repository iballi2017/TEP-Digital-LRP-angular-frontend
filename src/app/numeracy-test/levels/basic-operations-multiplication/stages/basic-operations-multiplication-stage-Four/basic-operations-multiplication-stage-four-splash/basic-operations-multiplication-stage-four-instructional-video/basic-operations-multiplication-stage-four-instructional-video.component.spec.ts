import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageFourInstructionalVideoComponent } from './basic-operations-multiplication-stage-four-instructional-video.component';

describe('BasicOperationsMultiplicationStageFourInstructionalVideoComponent', () => {
  let component: BasicOperationsMultiplicationStageFourInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageFourInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageFourInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageFourInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
