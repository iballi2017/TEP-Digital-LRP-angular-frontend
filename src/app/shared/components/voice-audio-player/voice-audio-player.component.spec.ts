import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceAudioPlayerComponent } from './voice-audio-player.component';

describe('VoiceAudioPlayerComponent', () => {
  let component: VoiceAudioPlayerComponent;
  let fixture: ComponentFixture<VoiceAudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceAudioPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
