import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageThreeComponent } from './lettering-stage-three.component';

describe('LetteringStageThreeComponent', () => {
  let component: LetteringStageThreeComponent;
  let fixture: ComponentFixture<LetteringStageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
