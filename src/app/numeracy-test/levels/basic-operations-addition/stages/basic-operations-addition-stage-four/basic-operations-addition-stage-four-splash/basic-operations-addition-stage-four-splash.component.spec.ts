import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageFourSplashComponent } from './basic-operations-addition-stage-four-splash.component';

describe('BasicOperationsAdditionStageFourSplashComponent', () => {
  let component: BasicOperationsAdditionStageFourSplashComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageFourSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageFourSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsAdditionStageFourSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
