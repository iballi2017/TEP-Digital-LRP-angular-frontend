import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAlphabetIComponent } from './say-alphabet-i.component';

describe('SayAlphabetIComponent', () => {
  let component: SayAlphabetIComponent;
  let fixture: ComponentFixture<SayAlphabetIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayAlphabetIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayAlphabetIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
