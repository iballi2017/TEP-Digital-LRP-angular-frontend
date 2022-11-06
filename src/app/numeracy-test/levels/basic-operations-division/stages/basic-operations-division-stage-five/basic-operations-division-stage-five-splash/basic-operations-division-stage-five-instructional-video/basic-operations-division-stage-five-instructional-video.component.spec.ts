import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageFiveInstructionalVideoComponent } from './basic-operations-division-stage-five-instructional-video.component';

describe('BasicOperationsDivisionStageFiveInstructionalVideoComponent', () => {
  let component: BasicOperationsDivisionStageFiveInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageFiveInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageFiveInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageFiveInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
