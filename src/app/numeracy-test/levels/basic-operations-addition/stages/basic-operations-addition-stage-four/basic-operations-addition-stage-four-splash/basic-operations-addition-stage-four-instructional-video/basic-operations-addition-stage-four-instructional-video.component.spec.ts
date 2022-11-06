import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageFourInstructionalVideoComponent } from './basic-operations-addition-stage-four-instructional-video.component';

describe('BasicOperationsAdditionStageFourInstructionalVideoComponent', () => {
  let component: BasicOperationsAdditionStageFourInstructionalVideoComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageFourInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageFourInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsAdditionStageFourInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
