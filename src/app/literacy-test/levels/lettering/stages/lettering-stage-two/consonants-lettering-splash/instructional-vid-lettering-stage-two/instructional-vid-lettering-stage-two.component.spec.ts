import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionalVidLetteringStageTwoComponent } from './instructional-vid-lettering-stage-two.component';

describe('InstructionalVidLetteringStageTwoComponent', () => {
  let component: InstructionalVidLetteringStageTwoComponent;
  let fixture: ComponentFixture<InstructionalVidLetteringStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionalVidLetteringStageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionalVidLetteringStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
