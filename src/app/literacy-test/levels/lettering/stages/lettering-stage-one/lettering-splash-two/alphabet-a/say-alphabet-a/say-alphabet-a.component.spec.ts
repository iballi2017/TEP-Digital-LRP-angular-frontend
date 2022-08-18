import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAlphabetAComponent } from './say-alphabet-a.component';

describe('SayAlphabetAComponent', () => {
  let component: SayAlphabetAComponent;
  let fixture: ComponentFixture<SayAlphabetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayAlphabetAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayAlphabetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
