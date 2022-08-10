import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringSplashTwoComponent } from './lettering-splash-two.component';

describe('LetteringSplashTwoComponent', () => {
  let component: LetteringSplashTwoComponent;
  let fixture: ComponentFixture<LetteringSplashTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringSplashTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringSplashTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
