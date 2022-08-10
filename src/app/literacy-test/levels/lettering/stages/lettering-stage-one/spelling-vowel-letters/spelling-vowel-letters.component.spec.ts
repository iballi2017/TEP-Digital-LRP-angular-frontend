import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellingVowelLettersComponent } from './spelling-vowel-letters.component';

describe('SpellingVowelLettersComponent', () => {
  let component: SpellingVowelLettersComponent;
  let fixture: ComponentFixture<SpellingVowelLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellingVowelLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellingVowelLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
