import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageTwoComponent } from './lettering-stage-two.component';

describe('LetteringStageTwoComponent', () => {
  let component: LetteringStageTwoComponent;
  let fixture: ComponentFixture<LetteringStageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
