import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageFourComponent } from './lettering-stage-four.component';

describe('LetteringStageFourComponent', () => {
  let component: LetteringStageFourComponent;
  let fixture: ComponentFixture<LetteringStageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
