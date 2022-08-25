import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdScreenConsonantSplashComponent } from './third-screen-consonant-splash.component';

describe('ThirdScreenConsonantSplashComponent', () => {
  let component: ThirdScreenConsonantSplashComponent;
  let fixture: ComponentFixture<ThirdScreenConsonantSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdScreenConsonantSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdScreenConsonantSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
