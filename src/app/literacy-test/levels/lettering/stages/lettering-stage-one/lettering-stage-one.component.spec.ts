import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageOneComponent } from './lettering-stage-one.component';

describe('LetteringStageOneComponent', () => {
  let component: LetteringStageOneComponent;
  let fixture: ComponentFixture<LetteringStageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
