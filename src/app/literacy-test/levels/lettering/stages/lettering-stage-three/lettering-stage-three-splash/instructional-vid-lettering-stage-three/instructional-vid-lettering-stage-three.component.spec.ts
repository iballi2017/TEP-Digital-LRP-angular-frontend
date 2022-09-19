import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalVidLetteringStageThreeComponent } from './instructional-vid-lettering-stage-three.component';

describe('InstructionalVidLetteringStageThreeComponent', () => {
  let component: InstructionalVidLetteringStageThreeComponent;
  let fixture: ComponentFixture<InstructionalVidLetteringStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionalVidLetteringStageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalVidLetteringStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
