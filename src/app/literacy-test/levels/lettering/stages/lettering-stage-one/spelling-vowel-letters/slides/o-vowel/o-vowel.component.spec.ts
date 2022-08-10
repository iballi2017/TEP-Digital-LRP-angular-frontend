import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OVowelComponent } from './o-vowel.component';

describe('OVowelComponent', () => {
  let component: OVowelComponent;
  let fixture: ComponentFixture<OVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OVowelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
