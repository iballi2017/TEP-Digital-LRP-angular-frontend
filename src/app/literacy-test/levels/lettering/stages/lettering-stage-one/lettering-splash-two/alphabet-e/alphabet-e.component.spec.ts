import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetEComponent } from './alphabet-e.component';

describe('AlphabetEComponent', () => {
  let component: AlphabetEComponent;
  let fixture: ComponentFixture<AlphabetEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
