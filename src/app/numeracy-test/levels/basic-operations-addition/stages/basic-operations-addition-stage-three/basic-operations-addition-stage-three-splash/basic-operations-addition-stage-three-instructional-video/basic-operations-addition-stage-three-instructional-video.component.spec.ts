import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageThreeInstructionalVideoComponent } from './basic-operations-addition-stage-three-instructional-video.component';

describe('BasicOperationsAdditionStageThreeInstructionalVideoComponent', () => {
  let component: BasicOperationsAdditionStageThreeInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageThreeInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageThreeInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsAdditionStageThreeInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
