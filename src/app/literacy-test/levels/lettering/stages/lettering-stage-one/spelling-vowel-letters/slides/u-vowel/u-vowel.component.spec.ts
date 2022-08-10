import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UVowelComponent } from './u-vowel.component';

describe('UVowelComponent', () => {
  let component: UVowelComponent;
  let fixture: ComponentFixture<UVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UVowelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
