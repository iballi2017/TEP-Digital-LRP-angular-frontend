import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounceAntComponent } from './pronounce-ant.component';

describe('PronounceAntComponent', () => {
  let component: PronounceAntComponent;
  let fixture: ComponentFixture<PronounceAntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounceAntComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounceAntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
