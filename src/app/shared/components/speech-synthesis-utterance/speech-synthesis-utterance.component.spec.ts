import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechSynthesisUtteranceComponent } from './speech-synthesis-utterance.component';

describe('SpeechSynthesisUtteranceComponent', () => {
  let component: SpeechSynthesisUtteranceComponent;
  let fixture: ComponentFixture<SpeechSynthesisUtteranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeechSynthesisUtteranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechSynthesisUtteranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
