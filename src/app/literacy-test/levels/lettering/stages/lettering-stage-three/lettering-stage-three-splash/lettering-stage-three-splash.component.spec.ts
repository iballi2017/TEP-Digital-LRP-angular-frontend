import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageThreeSplashComponent } from './lettering-stage-three-splash.component';

describe('LetteringStageThreeSplashComponent', () => {
  let component: LetteringStageThreeSplashComponent;
  let fixture: ComponentFixture<LetteringStageThreeSplashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageThreeSplashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageThreeSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
