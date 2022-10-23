import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageFiveComponent } from './basic-operations-division-stage-five.component';

describe('BasicOperationsDivisionStageFiveComponent', () => {
  let component: BasicOperationsDivisionStageFiveComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
