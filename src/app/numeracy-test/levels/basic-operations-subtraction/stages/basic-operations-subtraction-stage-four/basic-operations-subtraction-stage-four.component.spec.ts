import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsSubtractionStageFourComponent } from './basic-operations-subtraction-stage-four.component';

describe('BasicOperationsSubtractionStageFourComponent', () => {
  let component: BasicOperationsSubtractionStageFourComponent;
  let fixture: ComponentFixture<BasicOperationsSubtractionStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsSubtractionStageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsSubtractionStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
