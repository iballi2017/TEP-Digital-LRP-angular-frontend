import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsDivisionStageFourSplashComponent } from './basic-operations-division-stage-four-splash.component';

describe('BasicOperationsDivisionStageFourSplashComponent', () => {
  let component: BasicOperationsDivisionStageFourSplashComponent;
  let fixture: ComponentFixture<BasicOperationsDivisionStageFourSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsDivisionStageFourSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsDivisionStageFourSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
