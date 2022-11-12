import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageThreeActivityComponent } from './lettering-stage-three-activity.component';

describe('LetteringStageThreeActivityComponent', () => {
  let component: LetteringStageThreeActivityComponent;
  let fixture: ComponentFixture<LetteringStageThreeActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageThreeActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageThreeActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
