import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthScreenConsonantSplashComponent } from './fourth-screen-consonant-splash.component';

describe('FourthScreenConsonantSplashComponent', () => {
  let component: FourthScreenConsonantSplashComponent;
  let fixture: ComponentFixture<FourthScreenConsonantSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthScreenConsonantSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthScreenConsonantSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
