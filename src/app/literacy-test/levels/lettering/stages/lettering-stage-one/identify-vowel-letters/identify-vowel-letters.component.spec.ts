import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyVowelLettersComponent } from './identify-vowel-letters.component';

describe('IdentifyVowelLettersComponent', () => {
  let component: IdentifyVowelLettersComponent;
  let fixture: ComponentFixture<IdentifyVowelLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyVowelLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyVowelLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
