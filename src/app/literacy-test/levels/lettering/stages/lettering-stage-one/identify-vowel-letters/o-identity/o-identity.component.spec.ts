import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OIdentityComponent } from './o-identity.component';

describe('OIdentityComponent', () => {
  let component: OIdentityComponent;
  let fixture: ComponentFixture<OIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
