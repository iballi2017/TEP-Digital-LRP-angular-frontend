import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetAComponent } from './alphabet-a.component';

describe('AlphabetAComponent', () => {
  let component: AlphabetAComponent;
  let fixture: ComponentFixture<AlphabetAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
