import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageThreeSplashComponent } from './basic-operations-division-stage-three-splash.component';

describe('BasicOperationsDivisionStageThreeSplashComponent', () => {
  let component: BasicOperationsDivisionStageThreeSplashComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageThreeSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
