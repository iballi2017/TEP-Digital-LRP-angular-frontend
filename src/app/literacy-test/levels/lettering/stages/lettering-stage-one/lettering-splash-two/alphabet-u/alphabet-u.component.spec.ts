import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetUComponent } from './alphabet-u.component';

describe('AlphabetUComponent', () => {
  let component: AlphabetUComponent;
  let fixture: ComponentFixture<AlphabetUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
