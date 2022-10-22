import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsMultiplicationStageFourComponent } from './basic-operations-multiplication-stage-four.component';

describe('BasicOperationsMultiplicationStageFourComponent', () => {
  let component: BasicOperationsMultiplicationStageFourComponent;
  let fixture: ComponentFixture<BasicOperationsMultiplicationStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsMultiplicationStageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsMultiplicationStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
