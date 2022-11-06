import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageOneInstructionalVideoComponent } from './lettering-stage-one-instructional-video.component';

describe('LetteringStageOneInstructionalVideoComponent', () => {
  let component: LetteringStageOneInstructionalVideoComponent;
  let fixture: ComponentFixture<LetteringStageOneInstructionalVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageOneInstructionalVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageOneInstructionalVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
