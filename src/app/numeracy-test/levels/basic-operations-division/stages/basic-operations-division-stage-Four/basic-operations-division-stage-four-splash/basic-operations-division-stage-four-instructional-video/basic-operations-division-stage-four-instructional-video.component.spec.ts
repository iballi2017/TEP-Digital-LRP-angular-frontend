import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageFourInstructionalVideoComponent } from './basic-operations-division-stage-four-instructional-video.component';

describe('BasicOperationsDivisionStageFourInstructionalVideoComponent', () => {
  let component: BasicOperationsDivisionStageFourInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageFourInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageFourInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageFourInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
