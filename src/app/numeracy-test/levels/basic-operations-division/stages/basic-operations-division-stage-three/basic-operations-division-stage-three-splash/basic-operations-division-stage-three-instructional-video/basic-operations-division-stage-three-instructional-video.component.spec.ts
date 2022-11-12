import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageThreeInstructionalVideoComponent } from './basic-operations-division-stage-three-instructional-video.component';

describe('BasicOperationsDivisionStageThreeInstructionalVideoComponent', () => {
  let component: BasicOperationsDivisionStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
