import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshGameButtonComponent } from './refresh-game-button.component';

describe('RefreshGameButtonComponent', () => {
  let component: RefreshGameButtonComponent;
  let fixture: ComponentFixture<RefreshGameButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshGameButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshGameButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
