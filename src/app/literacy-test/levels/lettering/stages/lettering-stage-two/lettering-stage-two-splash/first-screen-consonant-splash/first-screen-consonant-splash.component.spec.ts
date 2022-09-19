import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstScreenConsonantSplashComponent } from './first-screen-consonant-splash.component';

describe('FirstScreenConsonantSplashComponent', () => {
  let component: FirstScreenConsonantSplashComponent;
  let fixture: ComponentFixture<FirstScreenConsonantSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstScreenConsonantSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstScreenConsonantSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
