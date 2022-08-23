import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAlphabetOComponent } from './say-alphabet-o.component';

describe('SayAlphabetOComponent', () => {
  let component: SayAlphabetOComponent;
  let fixture: ComponentFixture<SayAlphabetOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayAlphabetOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayAlphabetOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
