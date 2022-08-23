import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EIdentityComponent } from './e-identity.component';

describe('EIdentityComponent', () => {
  let component: EIdentityComponent;
  let fixture: ComponentFixture<EIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
