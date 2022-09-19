import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondScreenConsonantSplashComponent } from './second-screen-consonant-splash.component';

describe('SecondScreenConsonantSplashComponent', () => {
  let component: SecondScreenConsonantSplashComponent;
  let fixture: ComponentFixture<SecondScreenConsonantSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondScreenConsonantSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondScreenConsonantSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
