import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UIdentityComponent } from './u-identity.component';

describe('UIdentityComponent', () => {
  let component: UIdentityComponent;
  let fixture: ComponentFixture<UIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
