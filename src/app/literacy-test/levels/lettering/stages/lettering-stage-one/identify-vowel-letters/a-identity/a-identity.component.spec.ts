import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AIdentityComponent } from './a-identity.component';

describe('AIdentityComponent', () => {
  let component: AIdentityComponent;
  let fixture: ComponentFixture<AIdentityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AIdentityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AIdentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
