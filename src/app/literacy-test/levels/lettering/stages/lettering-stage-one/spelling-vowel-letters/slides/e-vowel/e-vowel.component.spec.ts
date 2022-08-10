import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EVowelComponent } from './e-vowel.component';

describe('EVowelComponent', () => {
  let component: EVowelComponent;
  let fixture: ComponentFixture<EVowelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EVowelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EVowelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
