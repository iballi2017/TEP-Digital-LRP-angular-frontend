import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetteringStageCompletionComponent } from './lettering-stage-completion.component';

describe('LetteringStageCompletionComponent', () => {
  let component: LetteringStageCompletionComponent;
  let fixture: ComponentFixture<LetteringStageCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetteringStageCompletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetteringStageCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
