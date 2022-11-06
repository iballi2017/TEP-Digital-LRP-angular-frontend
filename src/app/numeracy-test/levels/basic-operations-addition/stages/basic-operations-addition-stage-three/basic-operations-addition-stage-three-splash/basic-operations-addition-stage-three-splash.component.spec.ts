import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageThreeSplashComponent } from './basic-operations-addition-stage-three-splash.component';

describe('BasicOperationsAdditionStageThreeSplashComponent', () => {
  let component: BasicOperationsAdditionStageThreeSplashComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageThreeSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsAdditionStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
