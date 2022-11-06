import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageTwoActivityComponent } from './lettering-stage-two-activity.component';

describe('LetteringStageTwoActivityComponent', () => {
  let component: LetteringStageTwoActivityComponent;
  let fixture: ComponentFixture<LetteringStageTwoActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageTwoActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageTwoActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
