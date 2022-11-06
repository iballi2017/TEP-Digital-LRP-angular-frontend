import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionCategoryOptionsComponent } from './question-category-options.component';

describe('QuestionCategoryOptionsComponent', () => {
  let component: QuestionCategoryOptionsComponent;
  let fixture: ComponentFixture<QuestionCategoryOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionCategoryOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionCategoryOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
