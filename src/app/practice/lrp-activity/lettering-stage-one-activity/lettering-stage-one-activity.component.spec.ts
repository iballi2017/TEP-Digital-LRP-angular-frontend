import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageOneActivityComponent } from './lettering-stage-one-activity.component';

describe('LetteringStageOneActivityComponent', () => {
  let component: LetteringStageOneActivityComponent;
  let fixture: ComponentFixture<LetteringStageOneActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageOneActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageOneActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
