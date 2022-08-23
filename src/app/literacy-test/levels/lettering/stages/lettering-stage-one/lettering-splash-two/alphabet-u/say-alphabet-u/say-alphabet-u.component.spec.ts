import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayAlphabetUComponent } from './say-alphabet-u.component';

describe('SayAlphabetUComponent', () => {
  let component: SayAlphabetUComponent;
  let fixture: ComponentFixture<SayAlphabetUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayAlphabetUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayAlphabetUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
