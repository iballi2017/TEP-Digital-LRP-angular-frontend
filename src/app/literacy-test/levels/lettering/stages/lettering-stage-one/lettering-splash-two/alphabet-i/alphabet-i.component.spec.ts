import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetIComponent } from './alphabet-i.component';

describe('AlphabetIComponent', () => {
  let component: AlphabetIComponent;
  let fixture: ComponentFixture<AlphabetIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
