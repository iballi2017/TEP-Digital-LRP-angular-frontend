import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageFiveSplashComponent } from './basic-operations-division-stage-five-splash.component';

describe('BasicOperationsDivisionStageFiveSplashComponent', () => {
  let component: BasicOperationsDivisionStageFiveSplashComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageFiveSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageFiveSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageFiveSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
