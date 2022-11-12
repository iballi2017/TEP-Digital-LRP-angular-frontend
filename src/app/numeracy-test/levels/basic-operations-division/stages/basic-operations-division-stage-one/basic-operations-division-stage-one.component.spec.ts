import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageOneComponent } from './basic-operations-division-stage-one.component';

describe('BasicOperationsDivisionStageOneComponent', () => {
  let component: BasicOperationsDivisionStageOneComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
