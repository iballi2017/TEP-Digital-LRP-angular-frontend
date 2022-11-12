import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageTwoSplashComponent } from './lettering-stage-two-splash.component';

describe('LetteringStageTwoSplashComponent', () => {
  let component: LetteringStageTwoSplashComponent;
  let fixture: ComponentFixture<LetteringStageTwoSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageTwoSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageTwoSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
