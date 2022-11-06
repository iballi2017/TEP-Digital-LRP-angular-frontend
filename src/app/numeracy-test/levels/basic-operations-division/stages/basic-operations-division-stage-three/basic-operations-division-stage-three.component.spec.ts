import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageThreeComponent } from './basic-operations-division-stage-three.component';

describe('BasicOperationsDivisionStageThreeComponent', () => {
  let component: BasicOperationsDivisionStageThreeComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
