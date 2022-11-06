import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageThreeComponent } from './basic-operations-subtraction-stage-three.component';

describe('BasicOperationsSubtractionStageThreeComponent', () => {
  let component: BasicOperationsSubtractionStageThreeComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsSubtractionStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
