import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsonantsLetteringSplashComponent } from './consonants-lettering-splash.component';

describe('ConsonantsLetteringSplashComponent', () => {
  let component: ConsonantsLetteringSplashComponent;
  let fixture: ComponentFixture<ConsonantsLetteringSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsonantsLetteringSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsonantsLetteringSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
