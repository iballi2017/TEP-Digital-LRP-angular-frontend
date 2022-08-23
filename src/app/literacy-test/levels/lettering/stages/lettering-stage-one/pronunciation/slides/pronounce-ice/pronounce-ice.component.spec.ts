import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounceIceComponent } from './pronounce-ice.component';

describe('PronounceIceComponent', () => {
  let component: PronounceIceComponent;
  let fixture: ComponentFixture<PronounceIceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounceIceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounceIceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
