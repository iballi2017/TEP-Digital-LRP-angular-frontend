import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalVidLetteringStageThreeBComponent } from './instructional-vid-lettering-stage-three-b.component';

describe('InstructionalVidLetteringStageThreeBComponent', () => {
  let component: InstructionalVidLetteringStageThreeBComponent;
  let fixture: ComponentFixture<InstructionalVidLetteringStageThreeBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionalVidLetteringStageThreeBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalVidLetteringStageThreeBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
