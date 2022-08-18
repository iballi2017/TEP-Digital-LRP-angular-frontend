import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAlphabetEComponent } from './say-alphabet-e.component';

describe('SayAlphabetEComponent', () => {
  let component: SayAlphabetEComponent;
  let fixture: ComponentFixture<SayAlphabetEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayAlphabetEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayAlphabetEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
