import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageOneSplashComponent } from './lettering-stage-one-splash.component';

describe('LetteringStageOneSplashComponent', () => {
  let component: LetteringStageOneSplashComponent;
  let fixture: ComponentFixture<LetteringStageOneSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageOneSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageOneSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
