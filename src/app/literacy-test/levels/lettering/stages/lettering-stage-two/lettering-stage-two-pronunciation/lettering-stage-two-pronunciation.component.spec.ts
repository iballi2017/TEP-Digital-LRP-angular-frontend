import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageTwoPronunciationComponent } from './lettering-stage-two-pronunciation.component';

describe('LetteringStageTwoPronunciationComponent', () => {
  let component: LetteringStageTwoPronunciationComponent;
  let fixture: ComponentFixture<LetteringStageTwoPronunciationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageTwoPronunciationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageTwoPronunciationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
