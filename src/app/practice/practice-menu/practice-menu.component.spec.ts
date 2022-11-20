import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeMenuComponent } from './practice-menu.component';

describe('PracticeMenuComponent', () => {
  let component: PracticeMenuComponent;
  let fixture: ComponentFixture<PracticeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
