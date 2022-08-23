import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronounceOwlComponent } from './pronounce-owl.component';

describe('PronounceOwlComponent', () => {
  let component: PronounceOwlComponent;
  let fixture: ComponentFixture<PronounceOwlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PronounceOwlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PronounceOwlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
