import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounceEggComponent } from './pronounce-egg.component';

describe('PronounceEggComponent', () => {
  let component: PronounceEggComponent;
  let fixture: ComponentFixture<PronounceEggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounceEggComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounceEggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
