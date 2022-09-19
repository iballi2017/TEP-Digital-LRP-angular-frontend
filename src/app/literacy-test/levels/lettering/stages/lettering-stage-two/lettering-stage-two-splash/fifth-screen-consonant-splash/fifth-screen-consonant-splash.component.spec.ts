import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthScreenConsonantSplashComponent } from './fifth-screen-consonant-splash.component';

describe('FifthScreenConsonantSplashComponent', () => {
  let component: FifthScreenConsonantSplashComponent;
  let fixture: ComponentFixture<FifthScreenConsonantSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthScreenConsonantSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthScreenConsonantSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
