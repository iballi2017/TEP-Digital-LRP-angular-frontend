import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOperationsAdditionStageThreeComponent } from './basic-operations-addition-stage-three.component';

describe('BasicOperationsAdditionStageThreeComponent', () => {
  let component: BasicOperationsAdditionStageThreeComponent;
  let fixture: ComponentFixture<BasicOperationsAdditionStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOperationsAdditionStageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicOperationsAdditionStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
