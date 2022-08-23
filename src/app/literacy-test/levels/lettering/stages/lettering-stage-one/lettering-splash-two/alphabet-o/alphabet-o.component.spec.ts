import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetOComponent } from './alphabet-o.component';

describe('AlphabetOComponent', () => {
  let component: AlphabetOComponent;
  let fixture: ComponentFixture<AlphabetOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
