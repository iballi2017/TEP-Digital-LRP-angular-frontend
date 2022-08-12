import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestRespondentSelectionComponent } from './test-respondent-selection.component';

describe('TestRespondentSelectionComponent', () => {
  let component: TestRespondentSelectionComponent;
  let fixture: ComponentFixture<TestRespondentSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestRespondentSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRespondentSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
