import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordStageCompletionComponent } from './word-stage-completion.component';

describe('WordStageCompletionComponent', () => {
  let component: WordStageCompletionComponent;
  let fixture: ComponentFixture<WordStageCompletionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordStageCompletionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordStageCompletionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
