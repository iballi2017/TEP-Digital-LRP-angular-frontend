import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringSplashComponent } from './lettering-splash.component';

describe('LetteringSplashComponent', () => {
  let component: LetteringSplashComponent;
  let fixture: ComponentFixture<LetteringSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
